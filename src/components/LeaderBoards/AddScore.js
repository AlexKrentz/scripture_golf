import React, { useCallback, useEffect } from "react";
const AddScore = (props) => {
  const name = localStorage.email;
  const database = "https://scripture-golf-default-rtdb.firebaseio.com/";
  async function addScoreHandler() {
    if (typeof localStorage.email !== "undefined") {
      const response = await fetch(database + props.book + "-scores.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      let i = 0;
      if (data === null) {
        await fetch(database.concat(props.book + "-scores.json"), {
          method: "POST",
          body: JSON.stringify({ name: name, score: props.score }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      for (const key in data) {
        i++;
        if (data[key].name === name) {
          if (data[key].score > props.score) {
            break;
          } else {
            await fetch(database + props.book + "-scores" + '/' + key + ".json", {
              method: "PUT",
              body: JSON.stringify({ name: name, score: props.score }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            break;
          }
        }
        if (i === Object.keys(data).length) {
          await fetch(database.concat(props.book + "-scores.json"), {
            method: "POST",
            body: JSON.stringify({ name: name, score: props.score }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      }
    }
  }

  const fetchScoresHandler = useCallback(async () => {
    try {
      const response = await fetch(database.concat(name + ".json"));
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      if (data === null) {
        console.log("in data null");
        await fetch(database.concat(name + ".json"), {
          method: "POST",
          body: JSON.stringify({ book: props.book, score: props.score }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        let i = 0;
        for (const key in data) {
          i++;
          if (data[key].book === props.book) {
            if (data[key].score > props.score) {
              break;
            } else {
              await fetch(database.concat(name + "/" + key + ".json"), {
                method: "PUT",
                body: JSON.stringify({ book: props.book, score: props.score }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              break;
            }
          } else if (i === Object.keys(data).length) {
            await fetch(database.concat(name + ".json"), {
              method: "POST",
              body: JSON.stringify({ book: props.book, score: props.score }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            break;
          }
        }
      }
    } catch (error) {
      console.log("erorr " + error);
    }
  }, []);

  useEffect(() => {
    fetchScoresHandler();
  }, [fetchScoresHandler]);
  addScoreHandler();

  return <div></div>;
};

export default AddScore;

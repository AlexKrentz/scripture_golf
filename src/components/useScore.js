import React, {useEffect, useRef, useState} from "react";

const useScore = (takePoints, putPoints) => {
  
  const [score, setScore] = useState(1000);

  let subtractPoints = useRef(false);
  let addPoints = useRef(false);

  subtractPoints.current = takePoints;
  addPoints.current = putPoints;

  console.log("take points " + takePoints);
console.log("putPoints " + putPoints);
  useEffect(() => {
    const interval = setInterval(() => {
      if (takePoints) {
  // console.log("Subtract points " + subtractPoints.current);
       setScore((prevScore) => prevScore - 200); 
       subtractPoints.current = false;
      }
      if (putPoints) {
  // console.log("add points " + addPoints.current);
        setScore((prevScore) => prevScore + 500);
        addPoints.current = false;
      }
      setScore((prevScore) => prevScore - 1);
    }, 100)
    return () => clearInterval(interval);
  }, [subtractPoints, addPoints]);

  return score
};

export default useScore;

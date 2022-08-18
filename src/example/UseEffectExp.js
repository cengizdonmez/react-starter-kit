import { useState, useEffect } from "react";

const UseEffectExp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //Component ilk yüklendiğinde çalışır.
    console.log("useEffect");
  }, []); // [] => component tekrar çalışmaz.

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>Counter:{counter}</p>
      <button onClick={() => increase()}>Increase</button>
    </>
  );
};

export default UseEffectExp;

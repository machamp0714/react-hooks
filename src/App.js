import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement2 = () => {
    setCount(prevCount => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const double = () => {
    setCount(prevCount => prevCount * 2);
  };
  const divideThree = () => {
    setCount(prevCount => (prevCount % 3 === 0 ? prevCount / 3 : prevCount));
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>*2</button>
        <button onClick={divideThree}>3の倍数の時だけ、3で割る</button>
      </div>
    </>
    // Topレベルに不要なdivを挿入したくない時、React.Fragmentを使う
    // <React.Fragment>
    //   <div>count: {count}</div>
    //   <button>+1</button>
    // </React.Fragment>
  );
};

export default App;

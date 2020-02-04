import React, { useState } from "react";

const App = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <div>
        <button onClick={() => setPrice(price + 1)}>+1</button>
        <button onClick={() => setPrice(price - 1)}>-1</button>
        <button onClick={reset}>reset</button>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
      </div>
    </>
    // Topレベルに不要なdivを挿入したくない時、React.Fragmentを使う
    // <React.Fragment>
    //   <div>count: {count}</div>
    //   <button>+1</button>
    // </React.Fragment>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000
};

export default App;

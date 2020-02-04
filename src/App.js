import React, { useState, useEffect } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("useEffect is invoked.");
  });

  useEffect(() => {
    console.log("useEffect is like componentDidMount.");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  const renderPeriod = () => {
    return "。";
  };

  return (
    <>
      <p>
        現在の{name}は、{price}円です{renderPeriod()}
      </p>
      <div>
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          +1
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          -1
        </button>
        <button onClick={() => setState(props)}>reset</button>
        <input
          value={name}
          onChange={e => setState({ ...state, name: e.target.value })}
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

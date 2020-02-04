import React, { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
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

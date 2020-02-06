import React, { useReducer } from "react";
import Events from "./Events";
import EventForm from "./EventForm";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";

console.log(AppContext);

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello, I am a Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;

import React, { useReducer } from "react";
import Events from "./Events";
import EventForm from "./EventForm";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";

const App = () => {
  const initState = {
    events: [],
    logs: []
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;

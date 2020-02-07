import React, { useState, useContext } from "react";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_LOG,
  DELETE_ALL_LOGS
} from "../actions/index";
import AppContext from "../contexts/AppContext";
import { timeCurrentISO8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });

    dispatch({
      type: ADD_LOG,
      description: "イベントを作成しました。",
      operatedAt: timeCurrentISO8601()
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_LOG,
        description: "全てのイベントを削除しました。",
        operatedAt: timeCurrentISO8601()
      });
    }
  };

  const unCreatable = () => {
    return title === "" || body === "";
  };

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            id="formEventTitle"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            type="text"
            value={body}
            onChange={e => setBody(e.target.value)}
            id="formEventBody"
            className="form-control"
          />
        </div>
        <button
          disabled={unCreatable()}
          onClick={addEvent}
          className="btn btn-primary"
        >
          イベントを作成する
        </button>
        <button
          disabled={state.events.length === 0}
          onClick={deleteAllEvents}
          className="btn btn-danger"
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;

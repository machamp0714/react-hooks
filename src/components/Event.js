import React, { useContext } from "react";
import { DELETE_EVENT } from "../actions/index";
import AppContext from "../contexts/AppContext";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickDelete = () => {
    const result = window.confirm(
      `イベント(id=${event.id})を削除しても良いですか？`
    );
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id: event.id
      });
    }
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button onClick={handleClickDelete} className="btn btn-danger">
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;

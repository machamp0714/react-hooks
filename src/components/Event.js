import React from "react";

const Event = ({ event, dispatch }) => {
  const handleClickDelete = () => {
    dispatch({
      type: "DELETE_EVENT",
      id: event.id
    });
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

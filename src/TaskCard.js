import React from "react";


const TaskCard = ({ task, provided }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...provided.draggableProps.style,
        padding: "10px",
        margin: "5px 0",
        border: "1px solid lightgray",
        borderRadius: "5px",
        background: "white",
      }}
    >
      <p>{task.content}</p>
      <small>Start Date: {task.startDate}</small>
      <br />
      <small>Deadline: {task.deadline}</small>
    </div>
  );
};

export default TaskCard;

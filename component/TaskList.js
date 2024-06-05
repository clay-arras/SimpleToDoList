import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { list } = props;
  return (
    <>
      {list.map((obj) => (
        <TaskItem isCompleted={obj.isCompleted} text={obj.text} />
      ))}
    </>
  );
}

export default TaskList;

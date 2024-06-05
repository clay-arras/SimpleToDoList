import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { list } = props;
  return (
    <>
      {list.map((obj, id) => (
        <TaskItem isCompleted={obj.isCompleted} text={obj.text} key={id} />
      ))}
    </>
  );
}

export default TaskList;

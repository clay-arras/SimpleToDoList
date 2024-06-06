import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { list, handleCompleteTask } = props;
  return (
    <>
      {list.map((obj, id) => (
        <TaskItem
          isCompleted={obj.isCompleted}
          text={obj.text}
          key={id}
          taskId={id}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </>
  );
}

export default TaskList;

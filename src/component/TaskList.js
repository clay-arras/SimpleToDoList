import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const { list, handleCompleteTask, handleEditTask } = props;
  return (
    <>
      {list.map((obj, id) => (
        <TaskItem
          isCompleted={obj.isCompleted}
          text={obj.text}
          key={id}
          handleCompleteTask={handleCompleteTask}
          handleEditTask={handleEditTask}
          taskId={id}
        />
      ))}
    </>
  );
}

export default TaskList;

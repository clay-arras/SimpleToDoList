import React, { useState, useEffect } from "react";
import AddTaskForm from "../component/AddTaskForm";
import TaskList from "../component/TaskList";

function AppContainer() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (e) => {
    setTaskList([
      ...taskList,
      {
        text: e.text,
        isCompleted: e.isCompleted,
      },
    ]);
  };
  const handleCompleteTask = (taskId) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((e, id) => {
        return id !== taskId
          ? e
          : {
              ...e,
              isCompleted: !e.isCompleted,
            };
      });
    });
  };
  const handleEditTask = (taskId, newText) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((e, id) => {
        return id !== taskId
          ? e
          : {
              ...e,
              text: newText,
            };
      });
    });
  };

  return (
    <>
      <TaskList
        list={taskList}
        handleCompleteTask={handleCompleteTask}
        handleEditTask={handleEditTask}
      />
      <AddTaskForm addTask={handleAddTask} />
    </>
  );
}

export default AppContainer;

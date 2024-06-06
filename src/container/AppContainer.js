import React, { useState, useEffect } from "react";
import AddTaskForm from "../component/AddTaskForm";
import TaskList from "../component/TaskList";

function AppContainer() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (e) => {
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

  return (
    <>
      <TaskList list={taskList} handleCompleteTask={handleCompleteTask} />
      <AddTaskForm addTask={addTask} />
    </>
  );
}

export default AppContainer;

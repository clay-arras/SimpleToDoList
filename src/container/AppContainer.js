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
    console.log(taskList);
  };

  return (
    <>
      <TaskList list={taskList}/>
      <AddTaskForm addTask={addTask}/>
    </>
  )
}

export default AppContainer;

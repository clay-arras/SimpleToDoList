import React, { useState } from "react";
import styles from './AddTaskForm.module.css'; 

function AddTaskForm(props) {
  const { addTask } = props;
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    addTask({
      text: userInput,
      isCompleted: false,
    });
    setUserInput("");
  };

  return (
    <form onSubmit={handleInputSubmit}>
      <input value={userInput} onChange={handleInputChange} placeholder="Add task..." className={styles.addTaskInput}/>
    </form>
  );
}

export default AddTaskForm;

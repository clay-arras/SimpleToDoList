import React, { useState, useEffect } from "react";

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
      <input value={userInput} onChange={handleInputChange} />
      <p>{userInput}</p>
    </form>
  );
}

export default AddTaskForm;

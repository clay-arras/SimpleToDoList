import React, { useState } from "react";

function AddTaskForm(props) {
  const { addTask } = props;
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleInputSubmit = (e) => {
    addTask({
      text: userInput,
      isCompleted: false,
    });
    setUserInput("");
  };

  return (
    <input
      value={userInput}
      onChange={handleInputChange}
      onSubmit={handleInputSubmit}
    />
  );
}

export default AddTaskForm;
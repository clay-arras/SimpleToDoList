import React, { useState } from "react";
import styles from "./TaskItem.module.css";

function TaskItem(props) {
  const { text, isCompleted, handleCompleteTask, handleEditTask, taskId } =
    props;
  const [rows, setRows] = useState(1);
  const handleButtonClick = () => {
    handleCompleteTask(taskId);
  };
  const handleUserInput = (e) => {
    const taskItemBox = document.querySelector(`.${styles.taskItemBox}`);
    const computedStyle = window.getComputedStyle(taskItemBox);
    const fontSize = computedStyle.getPropertyValue("font-size");
    const textareaRowCount = Math.ceil(e.target.scrollHeight / parseInt(fontSize));
    setRows(textareaRowCount);
    handleEditTask(taskId, e.target.value);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className={isCompleted ? styles.buttonCompleted : styles.taskItemButton}
      />
      <textarea
        rows={rows}
        value={text}
        onChange={handleUserInput}
        className={isCompleted ? styles.textCompleted : styles.taskItemBox}
      />
    </div>
  );
}

export default TaskItem;

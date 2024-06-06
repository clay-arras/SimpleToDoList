import React from "react";
import styles from "./TaskItem.module.css";

function TaskItem(props) {
  const { text, isCompleted, handleCompleteTask, taskId } = props;
  const handleButtonClick = () => {
    handleCompleteTask(taskId);
  }

  return (
    <div>
      <button onClick={handleButtonClick} className={isCompleted ? styles.buttonCompleted : undefined} />
      <span style={styles.span} className={isCompleted ? styles.textCompleted : undefined}>
        {text}
      </span>
    </div>
  );
}

export default TaskItem;

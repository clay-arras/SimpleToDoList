import React from 'react';

function TaskItem(props) {
  const { text, isCompleted } = props;  
  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default TaskItem;
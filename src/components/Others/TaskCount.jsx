import React from 'react';

const TaskCount = ({ data }) => {
  const calculateTaskCounts = (tasks) => {
    return tasks.reduce(
      (counts, task) => {
        if (task.active) counts.active++;
        if (task.newtask) counts.newtask++;
        if (task.completed) counts.completed++;
        if (task.failed) counts.failed++;
        return counts;
      },
      { active: 0, newtask: 0, completed: 0, failed: 0 }
    );
  };

  return calculateTaskCounts(data.tasks);
};

export default TaskCount;

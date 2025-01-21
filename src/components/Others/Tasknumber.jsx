import React from 'react';
import TaskBlock from './TaskBlock';
import TaskCount from './TaskCount';

const Tasknumber = ({ data }) => {
  const taskCounts = TaskCount({ data });

  return (
    <div className="flex py-10 justify-between gap-8">
      <TaskBlock 
        bg="bg-white/10" 
        border="border-cyan-500" 
        taskname="New Tasks" 
        tasknumber={taskCounts.newtask} 
        glowcolor="shadow-cyan-400" 
      />
      <TaskBlock 
        bg="bg-white/10" 
        border="border-green-500" 
        taskname="Completed Tasks" 
        tasknumber={taskCounts.completed} 
        glowcolor="shadow-green-400" 
      />
      <TaskBlock 
        bg="bg-white/10" 
        border="border-yellow-500" 
        taskname="Active Tasks" 
        tasknumber={taskCounts.active} 
        glowcolor="shadow-yellow-400" 
      />
      <TaskBlock 
        bg="bg-white/10" 
        border="border-red-500" 
        taskname="Failed Tasks" 
        tasknumber={taskCounts.failed} 
        glowcolor="shadow-red-400" 
      />
    </div>
  );
};

export default Tasknumber;

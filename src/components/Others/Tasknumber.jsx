import React from 'react';
import TaskBlock from './TaskBlock';
import TaskCount from './TaskCount';

const Tasknumber = ({ data }) => {
  const taskCounts = TaskCount({ data });

  return (
    <div className="py-10">
      {/* Single Block for Small Screens */}
      <div className="block justify-center lg:hidden w-full rounded-lg bg-white/10 border border-white/30 text-white p-6 shadow-md space-y-2">
        <h2 className="text-xl font-bold mb-2">Task Summary</h2>
        <div className="text-sm">
          <p className="text-cyan-400">New Tasks: <span className="font-semibold text-white">{taskCounts.newtask}</span></p>
          <p className="text-green-400">Completed Tasks: <span className="font-semibold text-white">{taskCounts.completed}</span></p>
          <p className="text-yellow-400">Active Tasks: <span className="font-semibold text-white">{taskCounts.active}</span></p>
          <p className="text-red-400">Failed Tasks: <span className="font-semibold text-white">{taskCounts.failed}</span></p>
        </div>
      </div>

      {/* Multi-Block for Large Screens */}
      <div className="hidden lg:flex  justify-between gap-4">
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
    </div>
  );
};

export default Tasknumber;

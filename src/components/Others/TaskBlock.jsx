import React from 'react';

const TaskBlock = ({ bg, border, taskname, tasknumber, glowcolor }) => {
  return (
    <div
      className={`h-32 w-1/2 mt-4 rounded-lg ${bg} ${border} ${glowcolor} text-white 
        backdrop-blur-md font-semibold tracking-wide shadow-lg border transition-transform  p-6
        hover:scale-105 hover:-translate-y-1`}
    >
      <h1 className="text-3xl font-bold">{tasknumber}</h1>
      <h2 className="text-2xl font-semibold">{taskname}</h2>
    </div>
  );
};

export default TaskBlock;

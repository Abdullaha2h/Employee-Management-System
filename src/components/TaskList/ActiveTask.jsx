import React from "react";

const ActiveTask = ({ task, getSeverityColor }) => {
  return (
    <div
      className="flex-shrink-0 h-full lg:w-64 sm:w-full  rounded-xl bg-gradient-to-r from-yellow-500/50 to-yellow-700/50 border border-yellow-500 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_yellow] transition-shadow p-5 relative"
    >
      <div className="flex justify-between items-center">
        <h3
          className={`px-3 py-1 rounded-sm text-sm ${getSeverityColor(
            task.severity
          )}`}
        >
          {task.severity}
        </h3>
        <h2 className="text-sm">{task.taskDate}</h2>
      </div>
      <h3 className="font-semibold mt-5 text-xl">{task.taskTitle}</h3>
      <p className="text-sm font-light mt-2">{task.taskDescription}</p>
      <div className="mt-5 flex justify-between">
        <button className="relative px-4 py-1 rounded-full text-white font-medium bg-gradient-to-r from-green-700 to-green-900 hover:from-green-500 hover:to-green-700 transition">
          <span className="absolute inset-0 rounded-full border-2 border-green-400/50 pointer-events-none"></span>
          Completed
        </button>
        <button className="relative px-4 py-1 rounded-full text-white font-medium bg-gradient-to-r from-red-700 to-red-900 hover:from-red-500 hover:to-red-700 transition">
          <span className="absolute inset-0 rounded-full border-2 border-red-400/50 pointer-events-none"></span>
          Failed
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;

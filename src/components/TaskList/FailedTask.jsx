import React from "react";

const FailedTask = ({ task, getSeverityColor }) => {
  return (
    <div
      className="flex-shrink-0 h-full lg:w-64 sm:w-full  rounded-xl bg-gradient-to-r from-red-700/50 to-red-900/50 border border-red-600 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_red] transition-shadow p-5 relative"
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
      <div className="mt-5 flex justify-center">
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;

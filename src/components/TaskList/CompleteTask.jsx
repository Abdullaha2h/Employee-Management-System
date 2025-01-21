import React from "react";

const CompleteTask = ({ task, getSeverityColor }) => {
  return (
    <div
      className="flex-shrink-0 h-full w-64 rounded-xl bg-gradient-to-r from-green-700 to-green-900 border border-green-600 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_green] transition-shadow p-5 relative"
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
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;

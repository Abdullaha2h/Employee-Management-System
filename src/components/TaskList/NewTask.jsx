import React from "react";

const NewTask = ({ task, getSeverityColor, employeeName }) => {
  return (
    <div
      className="flex-shrink-0 h-full w-64 rounded-xl bg-gradient-to-r from-cyan-600/50 to-cyan-700/50 border border-cyan-400 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_cyan] transition-shadow p-5"
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
      <div className="mt-5 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <button onClick={(task) => { task.active = true; task.newtask = false; }} className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition">
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
          </button>
          <span className="text-sm mt-2 text-white">Accept</span>
        </div>
        <div className="flex flex-col items-center">
          <button className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition">
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
          </button>
          <span className="text-sm mt-2 text-white">Reject</span>
        </div>
      </div>
    </div>
  );
};

export default NewTask;

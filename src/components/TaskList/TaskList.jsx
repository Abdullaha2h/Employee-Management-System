import React from "react";
import ActiveTask from "./ActiveTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      case "fatal":
        return "bg-purple-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      id="tasklist"
      className="overflow-x-auto w-full px-3 h-80 py-5 flex items-center justify-start gap-5 flex-nowrap"
    > 

      {data.tasks.map((task, index) => {
        if (task.active) {
          return (
            <ActiveTask
            key={index}
              task={task}
              getSeverityColor={getSeverityColor}
            />
          );
        } else if (task.failed) {
          return (
            <FailedTask
            key={index}
              task={task}
              getSeverityColor={getSeverityColor}
            />
          );
        } else if (task.completed) {
          return (
            <CompleteTask
            key={index}
              task={task}
              getSeverityColor={getSeverityColor}
            />
          );
        } else if (task.newtask) {
          return (
            <NewTask
            key={index}
              task={task}
              employeeName={data.name}
              getSeverityColor={getSeverityColor}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TaskList;

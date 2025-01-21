import React, { useState, useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState('');

  const { updateEmployeeTasks } = useContext(Authcontext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      severity,
      newtask: true,
      active: false,
      failed: false,
      completed: false,
    };

    updateEmployeeTasks(assignTo, newTask);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setSeverity('');
  }

  
  return (
    <div className="h-auto mt-5 w-full rounded-xl bg-white/10 border border-white/40 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_teal] transition-shadow p-5 px-20">
      <form
        className="flex flex-start justify-between gap-5"
        onSubmit={(e) => submitHandler(e)}
      >
        
        <div className="flex flex-col gap-2 w-1/3">
          <div>
            <h3 className="text-lg font-medium text-white/80">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Project NEON"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light placeholder-white/50 outline-none border border-white/30 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light placeholder-white/50 outline-none border border-white/30 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee Name"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light placeholder-white/50 outline-none border border-white/30 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev. etc."
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light placeholder-white/50 outline-none border border-white/30 focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 w-1/2">
          <div>
            <h3 className="text-lg font-medium text-white/80">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              cols="50"
              rows="5"
              placeholder="You need to perform..."
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light placeholder-white/50 outline-none border border-white/30 focus:ring-2 focus:ring-teal-500 resize-none"
            ></textarea>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/80">Severity</h3>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-lg bg-white/20 text-white font-light outline-none border border-white/30 focus:ring-2 focus:ring-teal-500"
            >
              <option className='text-neutral-900'>
                Select Severity
              </option>
              <option value="Low" className="text-green-500 font-bold text-sm">
                Low
              </option>
              <option value="Medium" className="text-yellow-500  font-bold text-sm">
                Medium
              </option>
              <option value="High" className="text-red-500  font-bold  text-sm">
                High
              </option>
              <option value="Fatal" className="text-red-700  font-bold text-sm">
                Fatal
              </option>
            </select>
          </div>

          <div>
            <button className="w-full py-3 rounded-lg bg-white/30 border border-white/40 text-white shadow-md hover:shadow-[0_0_10px_cyan] transition-shadow">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

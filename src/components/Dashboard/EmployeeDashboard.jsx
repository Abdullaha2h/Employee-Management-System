import React from 'react';
import Header from '../Others/Header';
import TaskNumber from '../Others/Tasknumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data, changeUser, goBack }) => {
  return (
    <div className="p-10 h-screen">
      <button
        onClick={goBack}
        className="mb-5 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
      >
        Back
      </button>
      <Header data={data} changeUser={changeUser} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;

import React, { useContext, useState } from 'react';
import { Authcontext } from "../../context/AuthProvider";
import TaskCount from './TaskCount';
import EmployeeDashboard from '../Dashboard/EmployeeDashboard';
import { FaFilter } from 'react-icons/fa';

const AllTask = ({ changeUser }) => {
  const employees = useContext(Authcontext)?.employees || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  if (selectedEmployee) {
    return (
      <EmployeeDashboard
        data={selectedEmployee}
        changeUser={changeUser}
        goBack={() => setSelectedEmployee(null)}
      />
    );
  }

  return (
    <div
      id="tasklist"
      className="mt-5 mb-5 w-full rounded-xl bg-white/10 border border-white/40 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_teal] transition-shadow p-5 overflow-x-auto"
    >
      {/* Fixed-width scrollable table */}
      <div className="min-w-[700px]">
        {/* Header Row */}
        <div className="flex justify-between mb-5 px-10 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white border border-white/30 rounded-lg font-semibold">
          <h3 className="w-1/5 text-left flex items-center">
            Employee
            <FaFilter className="ml-2 cursor-pointer" onClick={toggleSearchBox} />
            {showSearchBox && (
              <input
                type="text"
                className="ml-2 p-1 rounded-md bg-white/30 text-black"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
          </h3>
          <h3 className="w-1/5 text-center">Active Tasks</h3>
          <h3 className="w-1/5 text-center">New Tasks</h3>
          <h3 className="w-1/5 text-center">Completed Tasks</h3>
          <h3 className="w-1/5 text-center">Failed Tasks</h3>
        </div>

        {/* Employee Rows */}
        {filteredEmployees.map((employee) => {
          const taskCounts = TaskCount({ data: employee });

          return (
            <div
              key={employee.name}
              onClick={() => setSelectedEmployee(employee)}
              className="flex justify-between mt-2 px-10 py-2 bg-white/20 text-white border border-white/30 rounded-lg font-normal cursor-pointer transition-transform transform hover:shadow-[0_0_15px_teal]"
            >
              <h3 className="w-1/5 text-left">{employee.name}</h3>
              <h3 className="w-1/5 text-center">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">{taskCounts.active}</span>
              </h3>
              <h3 className="w-1/5 text-center">
                <span className="bg-cyan-400 text-black px-2 py-1 rounded">{taskCounts.newtask}</span>
              </h3>
              <h3 className="w-1/5 text-center">
                <span className="bg-green-400 text-black px-2 py-1 rounded">{taskCounts.completed}</span>
              </h3>
              <h3 className="w-1/5 text-center">
                <span className="bg-red-500 text-white px-2 py-1 rounded">{taskCounts.failed}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateEmployeeTasks = (employeeName, newTask) => {
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.name === employeeName) {
        if (!employee.tasks) employee.tasks = [];
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });

    const updatedData = { ...userData, employees: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <Authcontext.Provider value={{ ...userData, updateEmployeeTasks }}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;

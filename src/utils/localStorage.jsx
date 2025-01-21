import React from 'react';
import adminData from './AdminData.json';
import employeeData from './EmployeeData.json';

    const admin = adminData;
    const employees = employeeData;

 export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
 }
 export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
 }

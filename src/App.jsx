import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { Authcontext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData=useContext(Authcontext)
 
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Parse stored JSON
    if (loggedInUser) {
      setUser(loggedInUser.role); // Set the user role
      setLoggedInUserData(loggedInUser.data); // Set user data
    }
  }, [authData]); // Only runs once when the component mounts
  

const handleLogin=(email,password)=>{

   if (authData) {
    const employee = authData.employees.find((e) => e.email === email && e.password === password);
    const admin = authData.admin.find((e) => e.email === email && e.password === password);
    if (employee) {
      setUser('employee'); 
      setLoggedInUserData(employee); 
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }));
    } 
    else if (admin) {
      setUser('admin'); 
      setLoggedInUserData(admin); 
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data:admin }));
    } 
    else {alert('Invalid Credentials')}
  }}


  return ( 
    <>
    
 {!user ? (<Login handleLogin={handleLogin} />) : user === 'admin' ? (<AdminDashboard changeUser={setUser} data={loggedInUserData} />) : (<EmployeeDashboard data={loggedInUserData} changeUser={setUser} />)}
 
      
    </>
  )
}

export default App
import React from "react";
import Header from "../Others/Header";
import Button from "../Others/Button";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 h-auto">
      <Header data={props.data} changeUser={props.changeUser}/>
      <CreateTask/> 
      <AllTask  data={props.data}/>
    </div>
  );
};

export default AdminDashboard;

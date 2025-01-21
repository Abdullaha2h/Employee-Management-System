import React from "react";
import Button from "../Others/Button";

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem("loggedInUser"); // Clear local storage
   props.changeUser('')
  };

  return (
    <div className="flex items-end justify-between px-20 pb-5">
      <h1 className="text-2xl">
        Hello <br /> <span className="text-3xl">{props.data.name} 👋</span>
      </h1>
      <Button text="Logout" onClick={logout} />
    </div>
  );
};

export default Header;

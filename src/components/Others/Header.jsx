import React from "react";
import Button from "../Others/Button";

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between px-5 sm:px-10 lg:px-20 py-4 gap-4 sm:gap-0 text-white">
      <h1 className="text-center sm:text-left text-xl sm:text-2xl">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold">{props.data.name} 👋</span>
      </h1>

      <Button text="Logout" onClick={logout} />
    </div>
  );
};

export default Header;

import React from "react";

const Button = ({ text,onClick }) => {
  return (
    <button onClick={onClick}
     className="w-44 mt-4 py-2 rounded-lg bg-white/30 border border-white/40 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_cyan] transition-shadow">
      {text}
    </button>
  );
};

export default Button;

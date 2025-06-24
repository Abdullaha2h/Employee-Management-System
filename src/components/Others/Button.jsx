import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-28 sm:w-44 mt-4 py-2 px-4 rounded-lg bg-white/30 border border-white/40 text-white backdrop-blur-md font-semibold tracking-wide shadow-lg hover:shadow-[0_0_10px_cyan] transition-shadow text-sm sm:text-base"
    >
      {text}
    </button>
  );
};

export default Button;

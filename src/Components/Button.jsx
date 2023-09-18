import React from "react";

const Button = (props) => {
  return (
    <button
      className={`h-10 w-10 bg-${props.color}-600 text-white opacity-70 transition-all duration-200 hover:opacity-100 active:scale-95`}
    >
      {props.children}
    </button>
  );
};

export default Button;

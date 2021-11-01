import React from "react";

const Button = ({ color, text, func }) => {
  return (
    <button className="btn" onClick={func}>
      {!text ? 'Show' : 'Hide' }
    </button>
  );
};

Button.defaultProps = {
  color: "Aquamarine",
};

export default Button;

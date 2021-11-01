import React from "react";

const Button = ({ color, text, func }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={func}>
      {!text ? 'Show' : 'Hide' }
    </button>
  );
};

Button.defaultProps = {
  color: "Aquamarine",
};

export default Button;

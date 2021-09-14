import React from "react";

const AlertButton = ({ color, size, ...props }) => {
  return (
    <button
      {...props}
      style={{
        fontSize: size === "small" ? 10 : 60,
        backgroundColor: color === "success" ? "limegreen" : "gray",
      }}
    />
  );
};

export { AlertButton };

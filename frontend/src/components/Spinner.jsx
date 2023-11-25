import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-row m-2 align-middle justify-center">
      <div className="animate-ping w-8 h-8 rounded-full bg-sky-600"></div>
      <div className="animate-ping w-8 h-8 rounded-full bg-green-600"></div>
      <div className="animate-ping w-8 h-8 rounded-full bg-red-600"></div>
      <div className="animate-ping w-8 h-8 rounded-full bg-yellow-600"></div>
    </div>
  );
};

export default Spinner;

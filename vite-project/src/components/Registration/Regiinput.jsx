import React from "react";

const Regiinput = (props) => {
  return (
    <div className="mt-4">
      <label
        htmlFor="name"
        className="block text-lg font-medium text-gray-700 undefined"
      >
        {props.label}

      </label>
      <div className="flex flex-col items-start">
        <input
          type={props.type}
          name={props.name}
          className="block w-full mt-1 py-3 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white border-2"
        />
      </div>
    </div>
  );
};

export default Regiinput;

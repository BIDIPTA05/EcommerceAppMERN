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
          className="block w-full mt-1 border-2 border-black rounded-md text-xl px-3 py-1
          bg-white text-black"
          value={props.value}
          onChange={props.change}
        />
      </div>
    </div>
  );
};

export default Regiinput;

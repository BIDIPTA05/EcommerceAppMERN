import React from "react";


const Regibutton = (props) => {
  return (
    <button
      aria-label={props.label}
      type={props.type}
      className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
     >
          <props.icon className={`text-xl ${props.color}`}/>

      <p className="text-lg">{props.label}</p>
    </button>
  );
};

export default Regibutton;

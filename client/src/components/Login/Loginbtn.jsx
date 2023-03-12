import React from 'react'

const Loginbtn = (props) => {
  return (
    <div className="flex items-center mt-4">
      <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 text-lg" type={props.type} >
        {props.name} 
      </button>
    </div>
  );
}

export default Loginbtn
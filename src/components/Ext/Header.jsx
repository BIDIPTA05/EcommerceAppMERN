import React from 'react'

const Header = (props) => {
  return (
    <div>
      <a href="/">
        {/* <h3 className="text-4xl text-center  font-bold text-purple-600">
          {props.name}
        </h3> */}
        <h4 className="text-2xl font-bold py-5 text-center">{props.operation}</h4>
      </a>
    </div>
  );
}

export default Header
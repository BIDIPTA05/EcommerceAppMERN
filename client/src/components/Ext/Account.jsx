import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Account = (props) => {

  const nav = () => {
    if (props.operation === "Log in") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };


  const navigate = useNavigate();
  return (
    <div className="mt-4 text-grey-600 text-lg">
      {props.type}{" "}
      <span>
        <a
          className="text-purple-600 hover:underline"
          onClick={()=>{ nav() }}
        >
          {props.operation}
        </a>
      </span>
    </div>
  );
}

export default Account
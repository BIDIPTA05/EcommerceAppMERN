import React from "react";
import Regiinput from "../Registration/Regiinput";
import Regibutton from "../Registration/Regibutton";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Or from "../Ext/Or";
import Loginbtn from "./Loginbtn";
import Header from "../Ext/Header";
import Account from "../Ext/Account";
import Navbar from "../../Mainnavbar";
import Footer from "../../Footer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };

const API_BASE_URL = "http://localhost:4000";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState(initialValues);
  const [token, setToken] = useState("");

  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (values) => {
    const error = {};
    if (!values.email) {
      error.email = "E-Mail is required!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 8) {
      error.pl = "Password must be greater than 8 Characters";
    }
    return error;
  };

  const loginData = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    const { email, password } = formValues;
    console.log(validate(formValues));
    const isError = validate(formValues);

    if (Object.keys(isError).length == 0) {
      try {
        const res = await fetch(`${API_BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        console.log(res);

        if (res.ok) {
          const data = await res.json();
          const token = data.token;
          console.log(data);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", data.userId);

          setToken(token);
          alert("Login successful");
          navigate("/");
        } else if (res.status >= 400 && res.status < 500) {
          alert("Invalid email or password");
        } else if (res.status >= 500) {
          alert("Server error. Please try again later");
        } else {
          alert("Unknown error. Please try again later");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 pb-4">
        <div>
          <a href="/">
            <Header name="TechVariable eCom" operation="Login here" />
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={loginData} method="POST">
            <Regiinput
              label="Email"
              type="email"
              name="email"
              value={formValues.email}
              change={change}
            />
            <p className="text-red-500">{formError.email}</p>
            <Regiinput
              label="Password"
              type="password"
              name="password"
              value={formValues.password}
              change={change}
            />
            <p className="text-red-500">{formError.password}</p>
            <p className="text-red-500">{formError.pl}</p>

            <a href="#" className="text-lg text-purple-600 hover:underline">
              Forget Password?
            </a>
            <Account type="Don't have an account?" operation="Sign up here" />

            <Loginbtn name="Login" type="submit" />
          </form>
          <Or />
          <div className="my-6 space-y-2">
            <Regibutton
              label="Login with Google"
              type="button"
              icon={FcGoogle}
            />
            <Regibutton
              label="Login with Facebook"
              type="button"
              icon={BsFacebook}
              color="fill-blue-600"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

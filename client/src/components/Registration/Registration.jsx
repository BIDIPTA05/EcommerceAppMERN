import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Account from "../Ext/Account";
import Header from "../Ext/Header";
import Loginbtn from "../Login/Loginbtn";
import Or from "../Ext/Or";
import Regibutton from "./Regibutton";
import Regiinput from "./Regiinput";
import Footer from "../../Footer";
import Navbar from "../../Mainnavbar";
import { GoogleOAuthProvider } from "@react-oauth/google";




import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const API_BASE_URL = "http://localhost:4000";








export default function Registration() {


  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState(initialValues);

  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (values) => {
    const error = {};

    if (!values.name) {
      error.name = "Name is required!";
    }
    if (!values.email) {
      error.email = "E-Mail is required!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 8) {
      error.pl = "Password must be greater than 8 Characters";
    }

    if (!values.password_confirmation) {
      error.password_confirmation = "Confirm Password is required!";
    }
    if (values.password !== values.password_confirmation) {
      error.incorrect = "Both Password must be Same";
    }
    return error;
  };

  const postData = async (e) => {





    e.preventDefault();
    setFormError(validate(formValues));
    const { name, email, password } = formValues;
    const isError = validate(formValues);
    console.log(validate(formValues), isError);
    if (Object.keys(isError).length === 0) {
      try {
        const response = await fetch(`${API_BASE_URL}/users/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await response.json();
        console.log(data);
        if (!data) {
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
        } else if (
          data.status === 409 ||
          data.message === "Email already exists"
        ) {
          window.alert("Email already exists, try another email");
          console.log("Email already exists");
        } else {
          window.alert("Registration Successfull");
          console.log("Registration Successfull");
          console.log(formValues);
        }
      } catch (error) {
        console.log(error);
        window.alert("Error occurred during registration.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-2 bg-gray-50 pb-4 ">
          <div>
            <a href="/">
              <Header
                name="TechVariable eCom"
                operation="New user? Sign up here"
              />
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form onSubmit={postData} method="POST">
              <Regiinput
                label="Name"
                type="text"
                name="name"
                value={formValues.name}
                change={change}
              />
              <p className="text-red-500"> {formError.name} </p>
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
              <Regiinput
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                value={formValues.password_confirmation}
                change={change}
              />
              <p className="text-red-500">{formError.password_confirmation}</p>
              <p className="text-red-500">{formError.incorrect}</p>
              <Loginbtn name="Register" type="submit" />
            </form>
            <Account type="Already have an account?" operation="Log in" />
            <Or />
            <div className="my-6 space-y-2">
              <Regibutton
                label="Login with Google"
                type="button"
                icon={FcGoogle}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </>
  

  );
}

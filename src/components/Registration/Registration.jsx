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




export default function Registration() {

  return (
    <>
      <Navbar/>
      <div > 
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
            <form>
              <Regiinput label="Name" type="text" name="name" />
              <Regiinput label="Email" type="email" name="email" />
              <Regiinput label="Password" type="password" name="password" />
              <Regiinput
                label="Confirm Password"
                type="password"
                name="confirmpassword"
              />
              <Loginbtn name="Register" />
            </form>
            <Account type="Already have an account?" operation="Log in" />
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
      </div>
      <Footer/>
    </>
  );
}

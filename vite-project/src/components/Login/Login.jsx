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


const Login = () => {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 pb-4">
        <div>
          <a href="/">
            <Header name="TechVariable eCom" operation="Login here" />
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <Regiinput label="User E-mail" type="email" name="email" />
            <Regiinput label="Password" type="password" name="password" />
          </form>
          <a href="#" className="text-lg text-purple-600 hover:underline">
            Forget Password?
          </a>
          <Account type="Don't have an account?" operation="Sign up here" />

          <Loginbtn name="Login" />
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
      <Footer/>
      
    </>
  );
};
export default Login;

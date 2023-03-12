import React from 'react'
import { FiTwitter,FiYoutube,FiFacebook } from 'react-icons/fi';
 

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Brands</a>
          <a className="link link-hover">Payments</a>
          <a className="link link-hover">FAQs</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FiTwitter className=" text-xl" />
            </a>
            <a>
              <FiYoutube className=" text-xl" />
            </a>
            <a>
              <FiFacebook className=" text-xl" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Tech Variable</p>
        </div>
      </footer>
    </>
  );
}

export default Footer
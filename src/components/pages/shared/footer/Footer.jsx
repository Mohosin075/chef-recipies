/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-20 px-2 lg:px-20">
      <div className="md:flex  justify-between w-full text-gray-400">
        <div className="md:w-1/3">
          <a className="btn btn-ghost  normal-case text-xl text-white">
            Damn <span className="text-purple-700">Delicious</span>
          </a>
          <h4 className="ps-4">
            Delicious Breakfast Meals that Don’t include Bread
          </h4>
          <div className="ps-4 mt-6 mt-8">
            <h3 className="text-xl mb-4 text-white">LINKS </h3>
            <div className="flex space-x-4">
                <a href="#"><FaFacebook></FaFacebook></a>
                <a href="#"><FaTwitter></FaTwitter></a>
                <a href="#"><FaGithub></FaGithub></a>
                <a href="#"><FaInstagram></FaInstagram></a>
            </div>
          </div>
          <p className="ps-4 text-gray-500"></p>
        </div>
        <div className="md:w-2/3 lg:flex justify-around ps-4 space-y-8 md:space-y-0">
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl mb-4 text-white">Go To</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4 text-white">TALK WITH US</h3>
            <p>456-8796-784-541</p>
            <p>Email : chef@recipe.com</p>
          </div>
          <div>
            <h3 className="text-xl mb-4 text-white ">SUBSCRIBE US</h3>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs text-lg"
            />
            <br />
            <button className="btn btn-secondary mt-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

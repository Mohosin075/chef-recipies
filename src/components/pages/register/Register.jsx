/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="hero pb-10 pt-4 bg-base-200 w-full">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Register now!
          </h1>
          <p className="py-6 text-center">Error :</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover"></a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
              <p className="text-xs my-3 text-center">
                Already have an account ? please{" "}
                <Link to="/login" className="text-purple-600 underline">
                  login
                </Link>
              </p>
              <div className="my-4 space-y-4 w-3/5 mx-auto">
                <button className="btn btn-outline btn-info w-full"> <span className="me-1"><img className="w68 h-6 rounded-full" src="https://icon2.cleanpng.com/20180423/rjw/kisspng-google-logo-logo-logo-5ade7dc7134299.2873015115245306310789.jpg" alt="" /></span>
                  Continue with Google
                </button>
                <button className="btn btn-outline btn-success w-full"><span className="me-1"><img className="w68 h-6 rounded-full" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" /></span>
                  Continue with GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

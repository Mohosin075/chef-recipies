/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Login = () => {
  const { signIn} = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate('/')
    })
    .catch(err=>{
      setError(err.message)
      console.log(err);
    })

  }

  return (
    <form onSubmit={handleLogin} className="hero pb-10 pt-4 bg-base-200 w-full">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Login now!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <p className="pb-2 text-center text-red-600">{error}</p>
              <button className="btn btn-secondary">Login</button>
              <p className="text-xs my-3 text-center">
                New to this website ?{" "}
                <Link to="/register" className="text-purple-600 underline">
                  create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

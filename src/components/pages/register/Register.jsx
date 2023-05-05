/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Providers/AuthProvider";

const Register = () => {
  const { createUser, user, updateUseData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // handle Register
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm, photo);

    // password validation

    if (password.length <= 5) {
      setError("password at lest 6 carecter");
      return;
    }

    if (password !== confirm) {
      setError("password does not match");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError("At lest one uppercase");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("At lest one number");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("At lest one special carecter");
      return;
    }
    // create user with email and password
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUseData(name, photo);
        console.log(loggedUser);
        navigate("/");
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
      });
  };
  
  return (
    <div
      onSubmit={handleRegister}
      className="hero pb-10 pt-4 bg-base-200 w-full"
    >
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Register now!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
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
                name="email"
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
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center justify-between">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered relative w-full"
                  required
                />
                <span className="absolute right-10 p-2 cursor-pointer" onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</span>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex items-center justify-between">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  name="confirm"
                  className="input input-bordered relative w-full"
                  required
                />
                <span className="absolute right-10 p-2 cursor-pointer" onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover"></a>
              </label>
            </div>
            <div className="form-control mt-6">
              <p className="pb-2 text-center text-red-600">{error}</p>
              <button className="btn btn-secondary">Register</button>
              <p className="text-xs my-3 text-center">
                Already have an account ? please{" "}
                <Link to="/login" className="text-purple-600 underline">
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

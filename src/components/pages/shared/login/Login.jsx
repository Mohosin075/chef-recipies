/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Login = () => {
  const { signIn,googleLogin , githubLogin} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  // previous location
  const from = location.state?.from?.pathname || "/";

  // handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in with email and password
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };


  // handle google login
  const handleGoogleLogin =()=>{
    googleLogin()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from);
    })
    .catch(err=>{
      console.log(err);
    })
  }

// handle github login
  const handleGithubLogin = () =>{
    githubLogin()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div onSubmit={handleLogin} className="hero pb-10 pt-4 bg-base-200 w-full">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            Login now!
          </h1>
        </div>
        <div className="card pb-8 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body">
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
          </form>
          <div className="my-4 space-y-4 w-3/5 mx-auto">
            <button className="btn btn-outline btn-info w-full text-xs"  onClick={handleGoogleLogin}>
              {" "}
              <span className="me-1">
                <img
                  className="w68 h-6 rounded-full"
                  src="https://icon2.cleanpng.com/20180423/rjw/kisspng-google-logo-logo-logo-5ade7dc7134299.2873015115245306310789.jpg"
                  alt=""
                />
              </span>
              Continue with Google
            </button>
            <button onClick={handleGithubLogin} className="btn btn-outline btn-success w-full text-xs">
              <span className="me-1">
                <img
                  className="w68 h-6 rounded-full"
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                  alt=""
                />
              </span>
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

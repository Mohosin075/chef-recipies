/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VeiwRecipy = () => {
  const chefInfo = useLoaderData();

  const { id, name, img, author, experience, numberOfRecipy, likes, details } =
    chefInfo;
  const { description, ingredients, method, rating } = details[0];

  console.log(chefInfo);

  const handleToast =(e)=>{
    toast("Added Favorite!")
    e.target.disabled = true;
  }


  return (
    <div className=" py-20 px-2 lg:px-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="h-96">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title font-bold text-4xl">{author}</h2>
          <p>{description}</p>
          <p className="text-gray-500">Recipes : {numberOfRecipy}</p>
          <p className="text-gray-500">Likes : {likes}</p>
          <p className="text-gray-500">Experience : {experience}</p>
        </div>
      </div>
      <div className="py-20">
          <h3 className="text-center text-4xl pb-10 uppercase">details</h3>
          <hr className="mb-10 w-2/3 mx-auto" />
        <div className="md:flex gap-12">
          <div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <h2 className="text-xl mt-4 font-semibold">ingredients</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {ingredients.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mt-4">cooking method</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {method.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">Rating : {rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary" onClick={handleToast}>Favorite</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <h2 className="text-xl mt-4 font-semibold">ingredients</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {ingredients.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mt-4">method</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {method.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">Rating : {rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary" onClick={handleToast}>Favorite</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <h2 className="text-xl mt-4 font-semibold">ingredients</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {ingredients.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mt-4">method</h2>
                <div className="space-y-2 ps-6 text-gray-500">
                  {method.map((i, k) => (
                    <li className="list-none text-xs " key={k}>
                      {i}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">Rating : {rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary" onClick={handleToast} >Favorite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeiwRecipy;

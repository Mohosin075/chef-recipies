/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

// chef section
const Chefs = ({ chef }) => {
  const { id, name, img, author, experience, numberOfRecipy, likes } = chef;
  return (
    
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="w-full h-60">
        <div>
          <LazyLoad
            threshold={0.95}
            onContentVisible={() => {
              console.log("loaded!");
            }}
          >
            <img src={img} />
          </LazyLoad>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{author}</h2>
        <hr />
        <p className="text-gray-500">Experience : {experience}</p>
        <p className="text-gray-500">Recipes : {numberOfRecipy}</p>
        <p className="text-gray-500">Likes : {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`}>
            <button className="btn btn-secondary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;

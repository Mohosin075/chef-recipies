/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
            Delicious Breakfast Meals that Don’t include Bread
          </h1>
          <p className="mb-5 text-xs lg:text-sm leading-4">
          A good chef knows how to balance flavors, textures, and aromas to create a perfect dish. They are experts in selecting the right ingredients, preparing them with precision,  an artistic and pleasing manner. Chefs also need to be knowledgeable about food safety, hygiene, and nutrition to ensure that their dishes are not only tasty but also healthy.
          </p>
          <button className="btn btn-secondary">start now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

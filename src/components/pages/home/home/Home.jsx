/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../banner/Banner";
import { useLoaderData } from "react-router-dom";
import Chefs from "../chefs/Chefs";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className="px-2 lg:px-20">
        <div className="py-20">
            <h2 className="text-5xl text-center font-bold">All Chef</h2>
            <p className="text-center md:w-2/3 mx-auto mt-6 text-gray-600">A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word chef is derived from the term chef de cuisine, the director or head of a kitchen. Chefs can receive formal training from an institution, as well as by apprenticing with an experienced chef.</p>
          {data.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

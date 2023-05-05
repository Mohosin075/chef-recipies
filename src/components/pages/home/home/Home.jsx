/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../banner/Banner";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chefs from "../chefs/Chefs";
import Review from "../Review/Review";
import PopularRecipes from "../mostPopular/PopularRecipes";

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  return (
    <div>
      {/* spinner */}
      <div className="text-5xl">
        {navigation.state === "loading" && (
          <button className="btn loading">loading</button>
        )}
      </div>
      {/* banner section */}
      <Banner></Banner>
      {/* chef section */}
      <div className="px-2 lg:px-20">
        <div className="py-20">
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            All Chef
          </h2>
          <p className="text-center md:w-2/3 mx-auto mt-6 text-gray-600">
            A chef is a professional cook and tradesman who is proficient in all
            aspects of food preparation, often focusing on a particular cuisine.
            The word chef is derived from the term chef de cuisine, the director
            or head of a kitchen. Chefs can receive formal training from an
            institution, as well as by apprenticing with an experienced chef.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-20 w-full mt-12">
            {data.map((chef) => (
              <Chefs key={chef.id} chef={chef}></Chefs>
            ))}
          </div>
        </div>
      </div>
      {/* Review section : extra section */}
      <Review></Review>
      {/* most popular recipes section : extra*/}
      <div className="py-16">
        <h2 className="text-3xl md:text-5xl text-center font-bold">MOST POPULAR RECIPES</h2>
        <hr  className="w-2/3 mx-auto mt-8"/>
        <PopularRecipes></PopularRecipes>
      </div>
    </div>
  );
};

export default Home;

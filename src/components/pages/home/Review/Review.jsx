import React from "react";
import ProgressBar from "../../../../utility/ProgressBar";

const Review = () => {
  // review section
  return (
    <div className="px-2 lg:px-20 bg-gray-200 py-16 font-semibold text-gray-700">
      <h2 className="text-3xl md:text-5xl text-center font-bold">Review</h2>
      <div className="flex mt-14 justify-around items-center flex-wrap">
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-8 rounded text-center w-full md:w-fit h-fit">
            <h2 className="text-xl font-bold text-purple-700">504k+</h2>
            <h3 className="text-xl font-semibold">Review</h3>
          </div>
          <div className="bg-white p-8 rounded text-center w-full md:w-fit h-fit">
            <h2 className="text-xl font-bold text-purple-700">20M+</h2>
            <h3 className="text-xl font-semibold">Likes</h3>
          </div>
          <div className="bg-white p-8 rounded text-center w-full md:w-fit h-fit">
            <h2 className="text-xl font-bold text-purple-700">200k+</h2>
            <h3 className="text-xl font-semibold">Comments</h3>
          </div>
        </div>
        <div className="bg-white font-bold p-6 rounded mt-10 md:mt-0">
          <h4 className="text-xl font-bold text-purple-700 mb-4">Ratings</h4>
          {/* rating progress bar */}
          <ProgressBar percentage={60} label="60%" star={'5 star'}/>
          <ProgressBar percentage={5} label="5%" star={'4 star'}/>
          <ProgressBar percentage={15} label="15%" star={'3 star'}/>
          <ProgressBar percentage={2} label="2%" star={'2 star'}/>
          <ProgressBar percentage={18} label="18%" star={'1 star'}/>
        </div>
      </div>
    </div>
  );
};

export default Review;

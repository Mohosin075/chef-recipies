import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const PopularRecipes = () => {
  const [data, setData] = useState([]);

  // popular section data load
  useEffect(() => {
    fetch("https://chef-server-mohosin075.vercel.app/popular")
      .then((res) => res.json())
      .then((popular) => {
        setData(popular);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="px-2 mt-10 lg:px-20 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
      {data.map((pop) => {
        return (
          <div key={pop.id}>
            <div onClick={()=>toast("zoom in feature not added!")} className="card w-full hover:drop-shadow-2xl cursor-zoom-in bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={pop.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl mt-12 font-semibold text-center">{pop.title}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularRecipes;

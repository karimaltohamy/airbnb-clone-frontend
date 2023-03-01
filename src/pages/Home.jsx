import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => setPlaces(data));
  }, []);
  return (
    <div className="content grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 md:mt-8">
      {places.length > 0
        ? places.map((place, index) => {
            return (
              <Link to={`/places/${place._id}`} key={index}>
                <div>
                  <img
                    className="rounded-xl aspect-square"
                    src={`https://airbnb-clone-backend.onrender.com/uploads/${place.photos[0]}`}
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span className="font-extrabold whitespace-nowrap text-ellipsis overflow-hidden">
                      {place.address}
                    </span>
                  </div>
                  <h2 className="text-sm text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden">
                    {place.title}
                  </h2>
                  <p className="font-bold underline">
                    ${place.price}{" "}
                    <span className="font-semibold text-sm">per night</span>
                  </p>
                </div>
              </Link>
            );
          })
        : "Loading"}
    </div>
  );
};

export default Home;

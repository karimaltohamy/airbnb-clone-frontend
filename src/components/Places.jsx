import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavAccount from "./NavAccount";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("/user-places")
      .then(({ data }) => setPlaces(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Fragment>
      <NavAccount />
      <div className="text-center">
        <Link
          to="/account/places/new"
          className="bg-primary text-white rounded-full inline-flex  gap-2 items-center py-1 px-3 mt-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add place
        </Link>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-5 px-4">
        {places.length > 0 &&
          places.map((place, index) => {
            return (
              <Link
                key={index}
                to={`/account/places/${place._id}`}
                className="p-2 bg-gray-200 rounded-md mb-2 flex gap-3 flex-col sm:flex-row"
              >
                <div className=" sm:w-[40%] md:w-[30%] h-[200px]">
                  <img
                    className="h-full w-full flex-1 rounded-md object-cover"
                    src={
                      "https://airbnb-clone-backend.onrender.com/uploads/" +
                      place.photos[0]
                    }
                    alt=""
                  />
                </div>
                <div className="smd:w-[60%] md:w-[70%]">
                  <h3 className="mb-1 font-semibold">{place.title}</h3>
                  <p className="text-[12px] sm:text-sm text-gray-700 ">
                    {place.description}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Places;

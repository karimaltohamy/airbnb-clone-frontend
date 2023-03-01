import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllPhotosSection from "../components/AllPhotosSection";
import BookingWidget from "../components/BookingWidget";
import GridPhotosSection from "../components/GridPhotosSection";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState([]);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    axios.get(`/places/${id}`).then(({ data }) => setPlace(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showAllPhotos) {
    return (
      <AllPhotosSection
        photos={place.photos}
        setShowAllPhotos={setShowAllPhotos}
      />
    );
  }

  return place ? (
    <div className="bg-gray-100 border-t border-gray-200">
      <div className="w-full max-w-[1100px] mx-auto mt-5 px-4">
        <h1 className="text-lg md:text-2xl font-bold">{place.title}</h1>
        <a
          target="_blank"
          href={`https://maps.google.com/?q=${place.address}`}
          className="underline mt-1 text-md md:text-lg font-semibold flex items-center gap-1"
          rel="noreferrer"
        >
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

          {place.address}
        </a>
        <GridPhotosSection
          photos={place.photos}
          setShowAllPhotos={setShowAllPhotos}
        />
        <div className="mt-8 mb-5 grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-8 ">
          <div className="">
            <div className="mb-3">
              <h3 className="font-bold text-lg md:text-2xl">Description</h3>
              <p className="text-sm md:text-md">{place.description}</p>
            </div>
            <div>
              <p className="font-semibold text-sm md:text-md">
                Check-in: {place.checkIn}
              </p>
              <p className="font-semibold text-sm md:text-md">
                Check-out: {place.checkOut}
              </p>
              <p className="font-semibold text-sm md:text-md">
                Max number of guests: {place.checkIn}
              </p>
            </div>

            <div className="border-t border-gray-300 mt-4 pt-3">
              <h1 className="font-bold text-lg md:text-2xl">
                What this place offers
              </h1>
            </div>
          </div>

          <BookingWidget place={place} />
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default PlacePage;

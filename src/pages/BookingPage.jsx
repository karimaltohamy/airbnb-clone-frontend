import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllPhotosSection from "../components/AllPhotosSection";
import CheckSection from "../components/CheckSection";
import GridPhotosSection from "../components/GridPhotosSection";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    axios
      .get("/bookings")
      .then(({ data }) => {
        setBooking(data.find((item) => item._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  if (showAllPhotos) {
    return (
      <AllPhotosSection
        photos={booking.place.photos}
        setShowAllPhotos={setShowAllPhotos}
      />
    );
  }

  return booking.place ? (
    <div className="w-full max-w-[1100px] mx-auto mt-5 px-4">
      <h1 className="text-lg md:text-2xl font-bold">{booking.place.title}</h1>
      <a
        target="_blank"
        href={`https://maps.google.com/?q=${booking.place.address}`}
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
        {booking.place.address}
      </a>
      <div className="bg-gray-200 rounded-lg p-5 mt-3 flex gap-4 items-start sm:items-center justify-between flex-col sm:flex-row">
        <div className="">
          <h1 className="text-md md:text-xl font-bold">
            Your booking information:
          </h1>
          <CheckSection booking={booking} />
        </div>

        <div className="p-2 sm:p-3 rounded-lg bg-primary text-white text-center w-full sm:w-auto">
          <span className="text-[14px] sm:text-md">Total price:</span>
          <h4 className="text-[20px] md:text-[32px] font-semibold">
            ${booking.price}
          </h4>
        </div>
      </div>
      <GridPhotosSection
        photos={booking.place.photos}
        setShowAllPhotos={setShowAllPhotos}
      />
    </div>
  ) : (
    "Loading"
  );
};

export default BookingPage;

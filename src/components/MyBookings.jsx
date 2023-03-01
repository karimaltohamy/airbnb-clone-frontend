import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CheckSection from "./CheckSection";
import NavAccount from "./NavAccount";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useState(() => {
    axios.get("/bookings").then(({ data }) => {
      setBookings(data);
    });
  }, []);
  return (
    <Fragment>
      <NavAccount />
      <div className="w-full max-w-[900px] mx-auto mt-9 px-4">
        {bookings.length > 0
          ? bookings.map((booking, index) => {
              return (
                <Link
                  to={`/account/mybookings/${booking._id}`}
                  key={index}
                  className={
                    "flex gap-1 md:gap-5 bg-slate-200 rounded-lg overflow-hidden flex-col sm:flex-row"
                  }
                >
                  <div className="w-full sm:w-[210px] h-[200px] sm:h-auto">
                    <img
                      src={`https://airbnb-clone-backend.onrender.com/uploads/${booking.place.photos[0]}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-2">
                    <h1 className="font-bold text-lg md:text-xl">
                      {booking.place.title}
                    </h1>

                    <CheckSection booking={booking} />

                    <div className="flex items-center gap-1 font-bold mt-2 text-sm md:text-md">
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
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      Total price: ${booking.price}
                    </div>
                  </div>
                </Link>
              );
            })
          : "not have booking"}
      </div>
    </Fragment>
  );
};

export default MyBookings;

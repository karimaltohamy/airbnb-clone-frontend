import React, { Fragment, useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { mainContext } from "../context/mainContext";

const BookingWidget = ({ place }) => {
  const { user } = useContext(mainContext);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberGuests, setNumberGuests] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  let numberOfNight = 0;

  useEffect(() => {
    if (user) {
      setFullName(user.username);
    }
  }, [user]);

  if (checkIn && checkOut) {
    numberOfNight = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const BookingPlace = async () => {
    const BoojungData = {
      checkIn,
      checkOut,
      numberGuests,
      fullName,
      phone,
      place: place._id,
      price: numberOfNight * place.price,
    };

    if (checkIn && checkOut && numberGuests && fullName && phone) {
      const { data } = await axios.post("/booking", BoojungData);
      setRedirect(`/account/mybookings/${data._id}`);
      console.log(data);
    } else {
      return;
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow-md p-3 rounded-lg">
      <h1 className="font-bold md:text-xl text-center">
        Price: ${place.price} / per night
      </h1>
      <div className=" border border-gray-200 rounded-lg mt-4">
        <div className="grid grid-cols-2  px-3">
          <div className="border-r border-gray-200 pr-2 py-3">
            <p className="font-semibold">Check in: </p>
            <input
              type="date"
              className="w-full"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="pl-2 py-3">
            <p className="font-semibold">Check out: </p>
            <input
              type="date"
              className="w-full"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="border-t border-gray-200 px-3 py-3">
          <div>
            <p>Max number of guests: </p>
            <input
              type="number"
              className="w-full"
              value={numberGuests}
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>
          {numberOfNight > 0 && (
            <Fragment>
              <div>
                <p>Full name: </p>
                <input
                  type="text"
                  className="w-full"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <p>Phone number: </p>
                <input
                  type="text"
                  className="w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <button className="btn-primary mt-4 w-full" onClick={BookingPlace}>
        Booking this place{" "}
        {numberOfNight > 0 && <span>$({numberOfNight * place.price})</span>}
      </button>
    </div>
  );
};

export default BookingWidget;

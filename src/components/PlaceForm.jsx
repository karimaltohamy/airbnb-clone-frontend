import React, { Fragment, useEffect, useState } from "react";
import UploadPhotos from "./UploadPhotos";
import PerksSection from "./PerksSection";
import NavAccount from "./NavAccount";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const PlaceForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setdescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState([]);
  const [maxGuests, setMaxGuests] = useState([]);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get("/places/" + id).then(({ data }) => {
        setTitle(data.title);
        setAddress(data.address);
        setPhotos(data.photos);
        setdescription(data.description);
        setPerks(data.perks);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
      });
    }
  }, [id]);

  const handleSavePlace = async (e) => {
    e.preventDefault();

    if (id) {
      if (
        title &&
        address &&
        description &&
        photos.length > 0 &&
        perks.length > 0 &&
        checkIn &&
        checkOut &&
        maxGuests &&
        price
      ) {
        await axios.put("/place", {
          id,
          title,
          address,
          photos,
          description,
          perks,
          checkIn,
          checkOut,
          maxGuests,
          price,
        });
        setRedirect(true);
      }
    } else {
      if (
        title &&
        address &&
        description &&
        photos.length > 0 &&
        perks.length > 0 &&
        checkIn &&
        checkOut &&
        maxGuests &&
        price
      ) {
        await axios.post("/place", {
          title,
          address,
          photos,
          description,
          perks,
          checkIn,
          checkOut,
          maxGuests,
          price,
        });
        setRedirect(true);
      } else {
        alert("Inputs field must be filled");
      }
    }
  };

  const handleHead = (header, disc) => {
    return (
      <Fragment>
        <h4 className="text-lg md:text-xl font-semibold">{header}</h4>
        <p className="text-sm text-gray-500 mb-2">{disc}</p>
      </Fragment>
    );
  };

  if (redirect) {
    return <Navigate to="/account/places" />;
  }

  return (
    <div className="px-5">
      <NavAccount />
      <form
        className="w-full max-w-[700px] m-auto mt-7 mb-3"
        onSubmit={handleSavePlace}
      >
        <div className="mb-3">
          {handleHead("Title", "title for place, should be short")}
          <input
            type="text"
            placeholder="title"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          {handleHead("Address", "address to this place")}
          <input
            type="text"
            placeholder="address"
            className="w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <UploadPhotos photos={photos} setPhotos={setPhotos} />
        <div className="mb-3">
          {handleHead("Description", "description to this place")}
          <textarea
            className="w-full h-32"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>
        <PerksSection
          perks={perks}
          setPerks={setPerks}
          handleHead={handleHead}
        />
        <div className="mb-3">
          {handleHead("Check in&out times", "add check in and out times")}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div>
              <label>Check in</label>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label>Check out</label>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label>max number of guests</label>
              <input
                type="number"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label>Price per night</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary py-2 w-full">
          Save
        </button>
      </form>
    </div>
  );
};

export default PlaceForm;

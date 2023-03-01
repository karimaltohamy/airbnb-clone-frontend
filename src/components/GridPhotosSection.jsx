import React from "react";

const GridPhotosSection = ({ photos, setShowAllPhotos }) => {
  return photos ? (
    <div className="grid grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr] gap-2 mt-3 rounded-xl overflow-hidden h-[350px] lg:h-[450px] relative">
      <span
        onClick={() => setShowAllPhotos(true)}
        className="flex items-center gap-1 absolute bottom-2 right-2 bg-slate-200 rounded-md py-1 px-1 md:px-3 cursor-pointer border border-black text-sm md:text-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 md:w-5 h-4 md:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        Show all photos
      </span>
      <div>
        <img
          src={`https://airbnb-clone-backend.onrender.com/uploads/${
            photos && photos[0]
          }`}
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="">
        <div className="h-[50%] w-full">
          <img
            src={`https://airbnb-clone-backend.onrender.com/uploads/${
              photos && photos[1]
            }`}
            alt=""
            className="h-full w-full object-cover aspect-auto"
          />
        </div>
        <div className="h-[50%] w-full mt-2">
          <img
            src={`https://airbnb-clone-backend.onrender.com/uploads/${
              photos && photos[2]
            }`}
            alt=""
            className="h-full w-full object-cover aspect-auto"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="h-[50%] w-full">
          <img
            src={`https://airbnb-clone-backend.onrender.com/uploads/${
              photos && photos[3]
            }`}
            alt=""
            className="h-full w-full object-cover aspect-auto"
          />
        </div>
        <div className="h-[50%] w-full mt-2">
          <img
            src={`https://airbnb-clone-backend.onrender.com/uploads/${
              photos && photos[4]
            }`}
            alt=""
            className="h-full w-full object-cover aspect-auto"
          />
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default GridPhotosSection;

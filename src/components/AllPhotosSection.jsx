import React from "react";

const AllPhotosSection = ({ photos, setShowAllPhotos }) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black">
      <div
        className="fixed top-3 right-3 flex items-center ga-2 bg-white py-1 px-3 rounded-lg cursor-pointer"
        onClick={() => setShowAllPhotos(false)}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        close
      </div>
      <div className="bg-black mt-7 px-5">
        <div className="grid grid-cols-[1fr] gap-3 w-full max-w-[700px] m-auto">
          {photos &&
            photos.map((photo) => {
              return (
                <img
                  key={photo}
                  src={`https://airbnb-clone-backend.onrender.com/uploads/${photo}`}
                  alt=""
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllPhotosSection;

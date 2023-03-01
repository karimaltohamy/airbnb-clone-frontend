import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { mainContext } from "../context/mainContext";

const Header = () => {
  const { user } = useContext(mainContext);
  return (
    <header className="py-4">
      <div className="content flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 md:w-7 h-6 md:h-7 -rotate-90 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>

          <span className="text-xl md:text-2xl font-semibold text-primary">
            airbnb
          </span>
        </Link>

        <div
          className="md:flex items-center py-2 px-3 border border-gray-200 rounded-full shadow gap-4"
          hidden
        >
          <div className="text-semibold border-r border-gray-300 pr-2">
            Anywhere
          </div>
          <div className="text-semibold border-r border-gray-300 pr-2">
            Aan week
          </div>
          <div className="text-semibold border-r border-gray-300 pr-2">
            Add guests
          </div>
          <div className="bg-primary rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 border border-gray-300 py-1 px-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 md:w-6 h-5 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="bg-gray-500 rounded-full p-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 md:w-5 h-4 md:h-5 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!!user && <span>{user.username}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;

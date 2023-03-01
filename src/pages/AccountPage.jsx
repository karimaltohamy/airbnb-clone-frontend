import axios from "axios";
import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import NavAccount from "../components/NavAccount";
import Places from "../components/Places";
import { mainContext } from "../context/mainContext";

const AccountPage = () => {
  const { user, ready, setUser } = useContext(mainContext);
  let { subpage } = useParams();

  const handleLoggout = async () => {
    try {
      await axios.post("/loggout");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  if (subpage === undefined) {
    subpage = "myprofile";
  }

  return user ? (
    <div>
      <NavAccount />

      <div className="text-center  max-w-md m-auto mt-7 px-3">
        <p>
          Logged in as {user.username} ({user.email})
        </p>
        <button
          onClick={handleLoggout}
          className="py-1 px-5 mt-3 w-full bg-primary text-white rounded-full"
        >
          Loggout
        </button>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default AccountPage;

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import AccountPage from "./pages/AccountPage";
import Places from "./components/Places";
import MyBookings from "./components/MyBookings";
import PlaceForm from "./components/PlaceForm";
import PlacePage from "./pages/PlacePage";
import BookingPage from "./pages/BookingPage";

axios.defaults.baseURL = "https://busy-bee-sweatpants.cyclic.app";
axios.defaults.withCredentials = true;
axios.AxiosHeaders = { "Access-Control-Allow-Origin": "*" };

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="account/places" element={<Places />} />
        <Route path="account/places/new" element={<PlaceForm />} />
        <Route path="account/places/:id" element={<PlaceForm />} />
        <Route path="account/mybookings" element={<MyBookings />} />
        <Route path="account/mybookings/:id" element={<BookingPage />} />
        <Route path="places/:id" element={<PlacePage />} />
      </Route>
    </Routes>
  );
}

export default App;

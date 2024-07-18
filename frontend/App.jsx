import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layouts/NavBar";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Footer from "./components/layouts/Footer";
import Categories from "./components/pages/Categories";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import RegisterForm from "./components/auth/RegisterForm";
import LoginForm from "./components/auth/LoginForm";
import Items from "./components/pages/Items";
import Orders from "./components/pages/Orders";
import PlaceOrders from "./components/pages/PlaceOrders";

// const initialState = {

// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "dataRecieved":
//       return { ...state, status: "ready" };
//     case "dataFailed":
//       return { ...state, status: "error" };
//     case "start":
//       return {
//      }
//     default:
//       throw new Error("Action is unknown");
//   }

const App = () => {
  const baseURL = "http://localhost:8000";

  // const [
  //   { },
  //   dispatch,
  // ] = useReducer(reducer, initialState);
  // useEffect(function () {
  //   fetch("http://localhost:9000/items")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataRecieved", payload: data }))
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/register" element={<RegisterForm baseURL={baseURL} />} />
        <Route path="/login" element={<LoginForm baseURL={baseURL} />} />
        <Route path="/items" element={<Items />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

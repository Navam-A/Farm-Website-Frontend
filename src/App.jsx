import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import BookService from "./Components/BookService";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import { createContext, useState } from "react";
import AddService from "./Admin/AddService";
import ManageService from "./Admin/ManageService";
import AddOffers from "./Admin/AddOffers";
import ManageOffers from "./Admin/ManageOffers";
import AddTestimonials from "./Admin/AddTestimonials";
import ManageTestimonials from "./Admin/ManageTestimonials";
import UpdateContact from "./Admin/UpdateContact";
import DeleteContact from "./Admin/DeleteContact";
export let tokenContext = createContext();

function App() {
  let [token, setToken] = useState("");
  return (
    <>
      <tokenContext.Provider value={[token, setToken]}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="bookservice" element={<BookService />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admindashboard" element={<AdminDashboard />}>
            <Route path="addservice" element={<AddService />} />
            <Route path="manageservice" element={<ManageService />} />
            <Route path="addoffers" element={<AddOffers />} />
            <Route path="manageoffers" element={<ManageOffers />} />
            <Route path="addtestimonials" element={<AddTestimonials />} />
            <Route path="managetestimonials" element={<ManageTestimonials />} />
            <Route path="updatecontact" element={<UpdateContact />} />
            <Route path="deletecontact" element={<DeleteContact />} />
          </Route>
        </Routes>
        <Footer />
      </tokenContext.Provider>
    </>
  );
}

export default App;

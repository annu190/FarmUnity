import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './screens/Services';
import ContactUs from './screens/ContactUs';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import Explore from './screens/Explore';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import LaborPortal from './screens/LaborPortal';
import LandSub from './screens/LandSub';
import LandLeasingOptions from './screens/LandLeasingOptions';
import SearchLand from './screens/SearchLand';
import LeaseForm from './screens/LeaseForm';
import BookStorage from "./screens/BookStorage";
import PostHarvestOptions from './screens/PostHarvestOptions';
import SearchStorage from './screens/SearchStorage';
import SubmitStorage from './screens/SubmitStorage';

function MainScrollPage() {
  return (
    <div id="main-scroll-container">
      <Home />
      <AboutUs />
      <Explore />
      <ContactUs/>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LaborPortal" element={<LaborPortal />} />

        {/* Land Leasing */}
        <Route path="/land-options" element={<LandLeasingOptions />} />
        <Route path="/land-leasing" element={<LandSub />} />
        <Route path="/search-land" element={<SearchLand />} />
        <Route path="/lease/:landId" element={<LeaseForm />} />

        {/* Post Harvest Management */}
        <Route path="/post-harvest-options" element={<PostHarvestOptions />} />
        <Route path="/search-storage" element={<SearchStorage />} />
        <Route path="/submit-storage" element={<SubmitStorage />} />
        <Route path="/book-storage/:storageId" element={<BookStorage />} />
      </Routes>
    </Router>
  );
}

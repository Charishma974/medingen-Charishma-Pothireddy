import React, { useState, useEffect } from 'react'
import axios from "axios";
import CompareCard from './component/CompareCard.js'
import Footer from './component/Footer.js';
import Disclaimer from "./component/Disclaimer.js"
import Header from './component/Header.js';
import "./App.css";
import Faqs from './component/Faqs.js';
import MedicineDetails from './component/MedicineDetails.js';
import RatingAndReview from './component/Rating.js';

const App = () => {
  const [defaultValue, setDefaultValue] = useState(1);
  const handleDefault = (id) => {
    setDefaultValue(id)
  }
  return (
    <div>
      <Header />
      <MedicineDetails defaultValue={defaultValue} />
      <div className="cards-wrapper">
        <CompareCard defaultValue={defaultValue} handleDefault={handleDefault} />
      </div>
      <Faqs defaultValue={defaultValue} />
      <RatingAndReview defaultValue={defaultValue} />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
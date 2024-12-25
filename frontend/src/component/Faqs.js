import React, { useEffect, useState } from "react";
import "./Faqs.css";
import axios from "axios";

const FAQ = ({ defaultValue }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    axios.get(`/medicine/${defaultValue}/faqs`).then(res => setFaqs(res.data)).catch(err => console.log("Error: ", err));
  }, [defaultValue])

  return (
    <div className="wrapper">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div
          className={`faq ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <button
            className="accordion"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <i
              className={`fa-solid fa-chevron-$
                {activeIndex === index ? "up" : "down"}`}
            ></i>
          </button>
          <div
            className="pannel"
            style={{ display: activeIndex === index ? "block" : "none" }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

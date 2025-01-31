import React from "react";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import "./Services.css";
import { host } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [dataset, setDataset] = useState([]); // Use state for dataset

  const fetchData = async () => {
    try {
      const response = await axios.post(`${host}/api/v1/service-fetch`, {
        passw: "alokeshPortfolio",
      });
      
      setDataset(response.data.service); // Assuming 'projects' is an array in the response
      console.log(response.data.service);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
 useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="services-base">
      {dataset.map((service) => (
        <ServiceCard id={service._id} title={service.title} />
      ))}
     
      <ContactForm />
    </div>
  );
};

export default Services;

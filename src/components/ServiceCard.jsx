import React from "react";
import { useDispatch } from "react-redux";
import { openForm } from "../redux/contactFormSlice";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const title = props.title;
  const dispatch = useDispatch();

  const openContactForm = () => {
    dispatch(openForm());
  };

  return (
    <div className="comp-servicecard-base">
      <div className="comp-servicecard-title">{title}</div>
      <div className="comp-servicecard-btn" onClick={openContactForm} id={props.id}>
        Contact Now
      </div>
    </div>
  );
};

export default ServiceCard;

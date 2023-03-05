import React from "react";
import "./Card.scss";

const Card = (props) => {
  return <img src={props.img} alt="cover" className="card" />;
};

export default Card;

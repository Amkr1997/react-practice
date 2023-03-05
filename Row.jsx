import React from "react";
import Card from "../Card/Card";
import "./Row.scss";
import posterImg from "../../assets/poster.jpg";

const Row = (props, { arr = [{ img: posterImg }] }) => {
  return (
    <div className="row">
      <h2 className="">{props.title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Row;

import React from "react";
import classes from "./ChartCard.module.css";

const ChartCard = (props) => {
  return (
    <div className={`${props.className}  ${classes.abc}`}>{props.children}</div>
  );
};

export default ChartCard;

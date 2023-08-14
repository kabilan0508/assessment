import React from "react";
import classes from "./Leftside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Locationsun from "./Locationsun";

const Leftsidecontain = () => {
  return (
    <div className={classes.leftcontainer}>
      <div className={classes.short}>
        <div>
          <div className={classes.plusiconcontainer}>
            <FontAwesomeIcon icon={faPlus} className={classes.plusicon} />
          </div>
        </div>
        <div className={classes.dots}>
          <button className={`${classes.dot} ${classes.active}`}>&nbsp;</button>
          <button className={classes.dot}>&nbsp;</button>
          <button className={classes.dot}>&nbsp;</button>
        </div>
        <div className={classes.switchcontiner}>
          <p>&deg;C</p>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider + ` ` + classes.round}></span>
          </label>
          <p>&deg;F</p>
        </div>
      </div>
      <Locationsun />
      <div className={classes.currenttemperature}>
        <div className={classes.weather}>
          <p>27&deg;</p>
          <label>
            <span className="material-symbols-outlined">wb_sunny</span>
            <div>Sunny</div>
          </label>
        </div>
        <div className={classes.leftarrow}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className={classes.rightarrow}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
};

export default Leftsidecontain;

import React from "react";
import classes from "./Locationsun.module.css";

const Locationsun = () => {
  return (
    <div className={classes.locationcontain}>
      <div className={classes.locationandtime}>
        <p className={classes.locationtext}>
          <span className="material-symbols-outlined">near_me</span>
          {`   `}New York, USA
        </p>
        <p className={classes.timetext}>07:19</p>
      </div>
      {/* <div className={classes.locationandtime}> */}
      <div className={classes.locationandtime}>
        <p className={classes.datetext}>Today 28 Sept</p>
        <p className={classes.timetext}>19:32</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Locationsun;

import React from "react";
import classes from "./Rightsidecontainer.module.css";
import MainChart from "./Chart/MainChart";
import SubCharts from "./Chart/SubCharts";
const Rightsidecontainer = () => {
  return (
    <div className={classes.rigthcontain}>
      <div className={classes.header}>
        <div className={classes.welometext}>
          <h4>Welcome back Isabella!</h4>
          <p>Check out today's weather information</p>
        </div>
        <div className={classes.menus}>
          icon
          <div>image</div>
        </div>
      </div>
      <MainChart />
      <SubCharts />
    </div>
  );
};

export default Rightsidecontainer;

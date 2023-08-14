import React from "react";
import classes from "./MainChart.module.css";

const MainChart = () => {
  return (
    <div className={classes.mainChartcontainer}>
      <div className={classes.chartheader}>
        <h3>Upcomming hours</h3>
        <div className={classes.selectcontain}>
          <select disabled>
            <option>Rain Precipitation</option>
          </select>
          <div>
            <p>Next Days</p>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
      </div>
      <ul className={classes.templist}>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>

        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
        <li className={classes.data}>
          <p>Now</p>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p>27&deg;</p>
        </li>
      </ul>
      <ul className={classes.areaChart}>
        <div className={`${classes.bar} ${classes.firstbar}`}>
          {/* <div className={classes.curdata}>
            <div className={classes.data}>
              <p>Now</p>
              <span className="material-symbols-outlined">wb_sunny</span>
              <p>27&deg;</p>
            </div>
          </div> */}
          <li style={{ "--start": 0.1, "--end": 0.4 }}></li>
          <div></div>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.4, "--end": 0.8 }}> </li>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.8, "--end": 0.6 }}></li>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.6, "--end": 0.7 }}> </li>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.7, "--end": 0.3 }}> </li>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.3, "--end": 0.3 }}> </li>
        </div>
        <div className={classes.bar}>
          <li style={{ "--start": 0.3, "--end": 0.1 }}> 10% </li>
        </div>
      </ul>
      <div>
        <ul className={classes.rainprelist}>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
          <li>23%</li>
        </ul>
      </div>
    </div>
  );
};

export default MainChart;

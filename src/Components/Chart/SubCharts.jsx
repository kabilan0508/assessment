import React from "react";
import classes from "./SubCharts.module.css";
import ChartCard from "../UI/ChartCard";

const SubCharts = () => {
  const rainpred = 30;
  const rain = (rainpred / 100) * 90;
  let fillfirst, fillsecond, fillthird;
  if (rain >= 60) {
    fillfirst = "100%";
    fillsecond = "100%";
    fillthird = ((rain - 60) / 30) * 100 + "%";
  } else if (rain >= 30) {
    fillfirst = "100%";
    fillsecond = ((rain - 30) / 30) * 100 + "%";
    fillthird = "0%";
  } else {
    fillfirst = (rain / 30) * 100 + "%";
    fillsecond = "0%";
    fillthird = "0%";
  }

  return (
    <div className={classes.container}>
      <h4>More details of today's weather</h4>
      <div className={classes.subchartcontainer}>
        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>Humidity</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
            {rain > 60 ? <p>bad</p> : rain > 30 ? <p>normal</p> : <p>good</p>}
          </div>
          <div className={classes.progressbarcontainer}>
            <div className={classes.progressbarhead}>
              <p>good</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillfirst }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>normal</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillsecond }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>bad</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillthird }}
                ></div>
              </div>
            </div>
          </div>
        </ChartCard>

        {/* Wind chart 2 */}

        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>Wind</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
            {rain > 60 ? <p>bad</p> : rain > 30 ? <p>normal</p> : <p>good</p>}
          </div>
          <div className={classes.progressbarcontainer}>
            <div className={classes.progressbarhead}>
              <p>good</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillfirst }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>normal</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillsecond }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>bad</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillthird }}
                ></div>
              </div>
            </div>
          </div>
        </ChartCard>

        {/* Chart 3 - Precipitation */}

        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>Precipitation</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
            {rain > 60 ? <p>bad</p> : rain > 30 ? <p>normal</p> : <p>good</p>}
          </div>
          <div className={classes.progressbarcontainer}>
            <div className={classes.progressbarhead}>
              <p>good</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillfirst }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>normal</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillsecond }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>bad</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillthird }}
                ></div>
              </div>
            </div>
          </div>
        </ChartCard>

        {/* Chart 4 - UV index */}

        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>UV index</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
            {rain > 60 ? <p>bad</p> : rain > 30 ? <p>normal</p> : <p>good</p>}
          </div>
          <div className={classes.progressbarcontainer}>
            <div className={classes.progressbarhead}>
              <p>good</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillfirst }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>normal</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillsecond }}
                ></div>
              </div>
            </div>
            <div className={classes.progressbarhead}>
              <p>bad</p>
              <div className={classes.progressbar}>
                <div
                  className={classes.progressbarfill}
                  style={{ width: fillthird }}
                ></div>
              </div>
            </div>
          </div>
        </ChartCard>

        {/* Feels Like chart 5 */}

        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>Humidity</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
            {rain > 60 ? <p>bad</p> : rain > 30 ? <p>normal</p> : <p>good</p>}
          </div>
          <div>
            <div className={classes.progressper}>
              <ul>
                <li>0%</li>
                <li>50%</li>
                <li>100%</li>
              </ul>
            </div>
            <div className={classes.progressbar}>
              <div
                className={classes.progressbarfill}
                style={{ width: rainpred + "%" }}
              ></div>
            </div>
          </div>
        </ChartCard>

        {/* Last Chart */}

        <ChartCard className={classes.cardstyle}>
          <div className={classes.header}>
            <h5>Chance of rain</h5>
            <span className={`material-symbols-outlined ${classes.icon}`}>
              water_drop
            </span>
          </div>
          <div className={classes.percentge}>
            <h3>{rainpred}% &nbsp;</h3>
          </div>
          <div>
            <div className={classes.progressper}>
              <ul>
                <li>0%</li>
                <li>25%</li>
                <li>50%</li>
                <li>75%</li>
                <li>100%</li>
              </ul>
            </div>
            <div className={classes.progressbar}>
              <div
                className={classes.progressbarfill}
                style={{ width: rainpred + "%" }}
              ></div>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default SubCharts;

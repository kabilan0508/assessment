import React from "react";
import classes from "./Container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Leftsidecontain from "./Leftsidecontain";
import Rightsidecontainer from "./Rightsidecontainer";

const Container = () => {
  return (
    <div className={classes.container}>
      <Leftsidecontain />
      <Rightsidecontainer />
    </div>
  );
};

export default Container;

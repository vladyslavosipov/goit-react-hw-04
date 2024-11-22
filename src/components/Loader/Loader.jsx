import React from "react";
import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div className="Loader">
    <TailSpin color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
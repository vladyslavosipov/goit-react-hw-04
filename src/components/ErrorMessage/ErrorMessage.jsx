import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.errorMessage}>{message}</div>
);

export default ErrorMessage;
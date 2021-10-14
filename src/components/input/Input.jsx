/*==========================================
Title:  move-app-react
Date:   15-Oct-2021
==========================================*/
import React from "react";
import "./input.scss";


const Input = props => {
  return (
      <input type={props.type} placeholder={props.placeholder} value={props.value}  onChange={props.onChange ? (e) =>props.onChange(e) : null} />
  );
};
export default Input;

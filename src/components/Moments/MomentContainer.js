import React from "react";
import "./Moments.scss";

export default function MomentContainer(props) {
  const { mapped, title, text } = props;
  return (
    <div className="moment-container">
      {title}
      <div className="moment-wrapper">
        {text ? text : <></>}
        {mapped}
      </div>
    </div>
  );
}

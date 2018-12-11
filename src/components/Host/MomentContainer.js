import React, { Component } from "react";

export default class MomentContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const { mapped, title, text } = this.props;
    return (
      <div className="hostpage">
        {title}
        <div className="HostCards">
          {text ? text : <></>}
          {mapped}
        </div>
      </div>
    );
  }
}

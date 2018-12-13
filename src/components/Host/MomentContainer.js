import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class MomentContainer extends Component {
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
          {this.props.location.pathname === "/trips" && mapped.length === 0 ? (
            <Link to="/">
              <img
                src="https://static.collectui.com/shots/3607374/moving-gif-large"
                alt=""
                style={{ height: "450px" }}
              />
            </Link>
          ) : (
            mapped
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(MomentContainer);

import React, { Component } from "react";

// Stateless Functional Component

class NavBar extends Component {
  render() {
    const { totalCounters, onCreate} = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
      <div style={{ fontSize: "32px" }}>
          {" Total "}
          <span className="badge rounded-pill bg-secondary">
              {totalCounters}
          </span>
      </div>
      <a href="https://react.dev">
          <img
              src="/cwdc/14-react/counter/src/logo.svg"
              style={{ height: "48px" }}
              alt="logo"
          />
      </a>
      <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
          <img
              src="/cwdc/14-react/counter/src/Bootstrap_logo.svg"
              style={{ height: "48px" }}
              alt="logo"
          />
      </a>
      <a
          className="navbar-brand"
          href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
      >
          Watch: "React for Beginners"
      </a>
      <a >
        <button
              onClick={() => onCreate()}
              className="btn btn-secondary btn-sm"
              style={{backgroundColor:"green"}}
            >
              +
            </button>
        </a>
  </nav>
    );
    }
}
export default NavBar;

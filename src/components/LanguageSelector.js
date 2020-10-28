import React, { Component } from "react";

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        ></i>
        <i
          className="flag ua"
          onClick={() => this.props.onLanguageChange("ukrainian")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;

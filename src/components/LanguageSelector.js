import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        ></i>
        <i
          className="flag ua"
          onClick={() => this.context.onLanguageChange("ukrainian")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;

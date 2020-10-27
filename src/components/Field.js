import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Ім'я";
    return (
      <div className="ui field">
        <label htmlFor="text">{text}</label>
        <input type="text" id="text" />
      </div>
    );
  }
}

export default Field;

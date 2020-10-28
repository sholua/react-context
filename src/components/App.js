import React, { Component } from "react";
import CreateUser from "./CreateUser";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorContext.Provider value="red">
            <CreateUser />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

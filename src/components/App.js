import React, { Component } from "react";
import CreateUser from "./CreateUser";
import LanguageContext from "../contexts/LanguageContext";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag ua"
            onClick={() => this.onLanguageChange("ukrainian")}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <CreateUser />
        </LanguageContext.Provider>

        <LanguageContext.Provider value="english">
          <CreateUser />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

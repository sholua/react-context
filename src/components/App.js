import React, { Component } from "react";
import CreateUser from "./CreateUser";

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
        <CreateUser />
      </div>
    );
  }
}

export default App;

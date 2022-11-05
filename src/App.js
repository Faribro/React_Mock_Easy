import "./styles.css";
import Parent from "./components/Parent.js";
import React, { Components } from "react";
import ReactDOM from "react-dom";
import UserGreeting from "./components/UserGreeting.js";
import NameList from "./components/NameList.js";
import Mock from "./mock";
import Mock1 from "./mock1";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Mock name="Farid Sayyed" />
        <Mock1 place="Mumbai" />
      </div>
    );
  }
}

export default App;

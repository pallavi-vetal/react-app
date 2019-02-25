import React, { Component } from "react";

import "./App.css";

import NavComponent from "./components/NavbarComponent";
import MainScreen from "./components/MainScreen";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  componentWillMount() {
    var loginPage = [];
    loginPage.push(<MainScreen appContext={this} key='lg'/>);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div className="App">
        <NavComponent />
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;

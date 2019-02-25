import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import UploadScreen from "./UploadScreen";
import axios from "axios";
import Home from "../Home";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      email: this.state.username,
      password: this.state.password
    };
    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log(response.data.success);
          var flag = false;
          if (response.data.success === "login sucessfull and have config") {
            
            var home = [];
            home.push(
              <Home
                appContext={self.props.appContext}
                email={self.state.username}
                flag = 'true'
              />
            );
            self.props.appContext.setState({
              loginPage: [],
              uploadScreen: home
            });
          }
          else{
            var uploadScreen = [];
            uploadScreen.push(
              <UploadScreen
                appContext={self.props.appContext}
                email={self.state.username}
              />
            );
            self.props.appContext.setState({
              loginPage: [],
              uploadScreen: uploadScreen
            });

            
          }
          
          console.log("Login successfull");
        } else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Login;

import React, { Component } from "react";
import { Tab, Tabs , Row, Col } from "react-bootstrap";
import axios from 'axios'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
class UploadScreen extends Component {
  constructor(props, context) {
    super(props, context);
    super(props);
    this.state={
      projectName:'',
      reporter:'',
      assignee:'',
      sprint:'',
      label:'',
      cycle: "",
      key:'alm',
    };
    
  }
  handleClick(event,key,userid) {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      email : userid,
      projectName: this.state.projectName,
      reporter: this.state.reporter,
      assignee: this.state.assignee,
      sprint: this.state.sprint,
      label: this.state.label,
      cycle: this.state.cycle,
      keyID: this.state.key,
    };
    console.log(payload)
    axios
      .post(apiBaseUrl + "configUpload", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Upload successfull");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
 } 
  render() {
   
    return (
      <div >
        <p>{this.props.email}</p>
        <Row >
          <Col xs="4">
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={key => this.setState({ key })}
            >
              <Tab eventKey="alm" title="ALM Config"><hr></hr>
              <MuiThemeProvider>
        
        <div style = {style}>
          <TextField
            hintText="Enter your project name"
            floatingLabelText="Project Name"
            style = {style}
            onChange={(event, newValue) =>
              this.setState({ projectName: newValue })
            }
          />
          <br />
          <TextField
            type="text"
            hintText="Enter reporter"
            floatingLabelText="Reporter"
            style = {style}
            onChange={(event, newValue) =>
              this.setState({ reporter: newValue })
            }
          />
           <br />
          <TextField
            type="text"
            hintText="Enter Assignee"
            style = {style}
            floatingLabelText="Assignee"
            onChange={(event, newValue) =>
              this.setState({ assignee: newValue })
            }
          />
           <br />
          <TextField
            type="text"
            hintText="Detected in sprint"
            style = {style}
            floatingLabelText="Sprint"
            onChange={(event, newValue) =>
              this.setState({ sprint: newValue })
            }
          />
          <h1></h1>
           <br />
          <TextField
            type="text"
            hintText="Enter label"
            floatingLabelText="Label"
            style = {style}
            onChange={(event, newValue) =>
              this.setState({ label: newValue })
            }
          />
           <br />
          <TextField
            type="text"
            hintText="Detected in  cycle"
            style = {style}
            floatingLabelText="Cycle"
            onChange={(event, newValue) =>
              this.setState({ cycle: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            className = 'btn-blk'
            style = {style}
            onClick={event => this.handleClick(event,this.state.key,this.props.email)}
          />
        </div>
      </MuiThemeProvider>
              </Tab>
              <Tab eventKey="jira" title="JIRA Config">
                JIRA content
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
const style = {
  marginLeft: -40,
  
};
export default UploadScreen;

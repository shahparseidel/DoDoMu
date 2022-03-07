import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    /* if (e.target.type === "checkbox") {
      value = e.target.checked;
    }*/
    const loginitem = { ...this.state.loginitem, [name]: value, email: "" };
    this.setState({ loginitem });
  };

  render() {
   
    const { toggle, onSave } = this.props;
    

  
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login Page</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="login-username">Username</Label>
              <Input
                type="text"
                id="login-username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="login-username">Password</Label>
              <Input
                type="text"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}>
              </Input>
            </FormGroup>                   
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.loginitem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

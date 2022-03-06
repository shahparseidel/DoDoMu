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
  Col,
  Label,
} from "reactstrap";

export default class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
   
    const howtocontactlst = ["Telegram","Whatsapp","Signal","Viper"];
    const howtocontactfield = howtocontactlst.map((item)  => ( 
        <option>{item}</option>
    ));
    const personcntlst = ["0","1","2","3",">3"];
    const personcntfield = personcntlst.map((item)  => ( 
        <option>{item}</option>
    ));

    const categorylst = ["Housing","Food","Auto"];
    const categoryfield = categorylst.map((item)  => ( 
        <FormGroup check>
        <Label  check>
          <Input type="checkbox" 
          id="settings-needsoffers"
          name="needsoffers-{item}"    
          onChange={this.handleChange}      
          />{' '}
          {item}
        </Label>
      </FormGroup>
      ));


    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Settings</ModalHeader>
        <ModalBody>
            Email/Username: hello@kitty.com            
          <Form>
          <FormGroup row>
              <Label  for="settings-fullname" size="sm" sm={3}>Full Name</Label>
              <Col sm={9}>
              <Input
                bsSize="sm" 
                type="text"
                id="settings-fullname"
                name="fullname"
                value={this.state.activeItem.fullname}
                onChange={this.handleChange}
                placeholder="Full Name"
              />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="settings-phone" size="sm" sm={4}>Phone Number</Label>
              <Col sm={8}><Input
                bsSize="sm" 
                type="text"
                id="settings-phone"
                name="phone"
                value={this.state.activeItem.phone}
                onChange={this.handleChange}
                placeholder="Phone Number"
              />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="settings-messenger">Messenger</Label>
              <Input
                bsSize="sm" 
                type="select"
                id="settings-messenger"
                name="messenger"
                value={this.state.activeItem.messenger}
                onChange={this.handleChange}
              >
                  {howtocontactfield}
                </Input>
            </FormGroup>

          <Label for="settings-needsoffers">Areas of Needs</Label>
            {categoryfield}
            <FormGroup>
              <Label for="settings-location">Location</Label>
              <Input
                bsSize="sm" 
                type="text"
                id="settings-details"
                name="details"
                value={this.state.activeItem.location}
                onChange={this.handleChange}
                placeholder="Where are you right now"
              />
            </FormGroup>
            <FormGroup>
              <Label for="settings-adultcnt">Number of adults with me</Label>
              <Input
                bsSize="sm" 
                type="select"
                id="settings-adultcnt"
                name="adultcnt"
                value={this.state.activeItem.location}
                onChange={this.handleChange}
                placeholder="How many adults are in your family"
              >
                  {personcntfield}
                </Input>
                </FormGroup>
            <FormGroup>
              <Label for="settings-childcnt">Number of childs with me</Label>
              <Input
                bsSize="sm" 
                type="select"
                id="settings-childcnt"
                name="childcnt"
                value={this.state.activeItem.location}
                onChange={this.handleChange}
                placeholder="How many childs are in your family"
              >
                                {personcntfield}
                </Input>
            </FormGroup>
            <FormGroup>
              <Label for="settings-details">Details about you</Label>
              <Input
                bsSize="sm" 
                type="textarea"
                id="settings-details"
                name="details"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter some information about yourself and your family"
              />
            </FormGroup>
           
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

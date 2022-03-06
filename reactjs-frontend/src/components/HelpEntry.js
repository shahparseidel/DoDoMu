import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Check,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class OfferRequestHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      needhelp: this.props.needhelp,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
    console.log(activeItem )
  };

  render() {
    var title; 
    var multihuman=null;
    const { toggle, onSave } = this.props;

    const maxwidthlst = ["500m","1km","2km","5km","10km","20km","50km"]
    const categorylst = ["Housing","Food","Auto"];
    const urgencylst = ['As soon as possible','today','this week'];
    const pickupordeliverylst = ['Please Pickup the Item or Service','I can deliver the Item or Service'];

    const categoryfield = categorylst.map((item)  => ( 
      <option>{item}</option>
    ));
    const urgencyfield = urgencylst.map((item)  => ( 
      <option>{item}</option>
    ));
    const maxwidthfield = maxwidthlst.map((item) => (
      <option value={maxwidthlst.indexOf(item)}>{item}</option>
    ));
    const pickupordeliveryfield = pickupordeliverylst.map((item) => (
      <option value={pickupordeliverylst.indexOf(item)}>{item}</option>
    ));


      if (this.state.needhelp===true) {
        title = "Request Help";        
      }
      else {
        title = "Offer Help";
        multihuman=(
          <FormGroup check>  
           <Input 
          type="checkbox"
          id="help-multihuman"
          name="multihuman"          
        />
        {' '}
          <Label  check for="help-multihuman">
          This help offer is for multiple people
        </Label>           
        </FormGroup>
             );
        }
        var maxrange = null;
      maxrange=(
      <FormGroup>
      <Label for="help-maxrange">Max Delivery Range (km)</Label>
      <Input
        type="select" 
        id="help-maxrange"
        name="maxrange"
        value={this.state.activeItem.maxrange} 
        onChange={this.handleChange}
        placeholder="Enter Maxrange">
          {maxwidthfield}
        </Input>
    </FormGroup>)
    

  
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="help-category">Category</Label>
              <Input
                type="select"
                id="help-category"
                name="category"
                value={this.state.activeItem.category} 
                onChange={this.handleChange}
                placeholder="Set Category">  
                {categoryfield}           
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="select"
                id="help-category2"
                name="category2"
                //value={this.state.activeItem.category} 
                //onChange={this.handleChange}
                placeholder="Set Category">  
                {categoryfield}           
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="help-description">Details</Label>
              <Input
                type="textarea" // CHANGE_ME
                id="help-description"
                name="description"
                value={this.state.activeItem.description} 
                onChange={this.handleChange}
                placeholder="Enter Description" />
            </FormGroup>
            <FormGroup>
              <Label for="help-location">My Location</Label>
              <Input
                type="text" // CHANGE_ME
                id="help-location"
                name="location"
                value={this.state.activeItem.location} 
                onChange={this.handleChange}
                placeholder="Enter Location" />
            </FormGroup>
            <FormGroup>
              <Label for="help-urgency">Urgency</Label>
              <Input
                type="select" // CHANGE_ME
                id="help-urgency"
                name="urgency"
                value={this.state.activeItem.urgency}
                onChange={this.handleChange}
                placeholder="Enter Urgency">
                {urgencyfield} 
                </Input>
            </FormGroup>
            <FormGroup>
            <Label for="help-pickupordelivery">Transport</Label>
              <Input
                id="help-pickupordelivery"
                name="pickupordelivery"      
                value={this.state.activeItem.pickupordelivery}      
                onChange={this.handleChange}
                type="select"
              >
                {pickupordeliveryfield}
                </Input>
            </FormGroup>
            {maxrange}
            {multihuman}           
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

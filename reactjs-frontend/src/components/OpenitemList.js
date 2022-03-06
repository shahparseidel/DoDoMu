import React, { Component } from "react";
import axios from "axios";


export default class OpenitemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  componentDidMount() {
    console.log('OpenitemlstMount')
  }
// 
render() {
    const theItems = this.props.OpenitemLst;
    const { editOfferRequest, deleteOfferRequest} = this.props;
    return theItems.map((item) => (
      <li  key={item.id} 
      className="list-group-item d-flex m-0 p-0  justify-content-between align-items-center">
      <span className="col-2">{item.category}</span>
      <span className="col-7 text-sm-left"><span class="font-italic">{item.category2}: </span>{item.description}</span>
      <button className="col-1"
            className="btn btn-primary disabled" disabled
            onClick={() => this.reviewresp(item)}
          >R</button>
                <button className="col-1"
            className="btn btn-secondary"
            onClick={() => editOfferRequest(item)}
          >E</button>
                <button className="col-1"
            className="btn btn-danger"
            onClick={() => deleteOfferRequest(item)}
          >D</button>


        </li>
      ));    
  }


}

 

import React, { Component } from "react";
import axios from "axios";
import {

  } from "reactstrap";

export default class NotificationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
        NoteFeed : [],
    };

  }

  componentDidMount() {
    this.OfferRequestrefreshList();
  }


  OfferRequestrefreshList = () => {
    axios
      .get("./api/offersandrequests/")
      .then((res) => this.setState({ NoteFeed: res.data }))
      .catch((err) => console.log(err));
  };


/*   <button
  class="btn btn-primary btn-sm"
  onClick={() => editProfile()}                   
  >Edit Profile
</button> */

render() {
    const theItems = this.state.NoteFeed;
    return theItems.map((item) => (
      <li  key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center">
      <span>{item.category}</span>
      <span className="badge badge-primary badge-pill">{item.id}</span>
        </li>
      ));    
  }


}


/* rendernotefeed2= () => {
  const theItems = this.state.NoteFeed;
  return theItems.map((item) => (
    <li  key={item.id}
    className="list-group-item d-flex justify-content-between align-items-center">
    <span>
      {item.category}
      {item.description}
      {item.location}        
    </span>
    <span><button
          className="btn btn-danger"
          onClick={() => this.handleDelete(item)}
        >
          Accept
        </button></span>
        <span class="badge badge-secondary badge-pill">{item.id}km</span>
      </li>
    ));    
} */



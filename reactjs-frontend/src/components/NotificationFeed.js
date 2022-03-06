import React, { Component } from "react";
import axios from "axios";
import {

  } from "reactstrap";

export default class NotificationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }

 





/*   <button
  class="btn btn-primary btn-sm"
  onClick={() => editProfile()}                   
  >Edit Profile
</button> */


urgencyview = (item) => {
  const urgencylst = ['As soon as possible','today','this week'];
  //console.log(item);
  return(urgencylst[item]);
}

deliverypickup = (pickupordeliveryitem, maxrangeitem) => {
  const maxwidthlst = ["500m","1km","2km","5km","10km","20km","50km"];
  if (pickupordeliveryitem === true) {
    return(<div>
      Can be delivered up to {maxwidthlst[maxrangeitem]}
      </div>
    );
  } else 
  {
    return(<div>Please Pickup
    </div>);
  }
}
 
render() {
    const theItems = this.props.NoteFeed;
    const {  ackOfferRequest} = this.props;
    return theItems.map((item) => (
      <li  key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center">
      <span className="col-11">
        <div class="font-weight-bold">{item.category} - {item.category2} @ Shahpar Seidel</div>
        <div className="badge badge-primary badge-pill col-3">{item.id}km</div>
        <div>{item.description}</div>
        <div>-</div>
        <div>{this.urgencyview(item.urgency)}</div>
        {this.deliverypickup(item.pickupordelivery,item.maxrange)}        
</span>

                <button className="col-1 text-sm-left"
            className="btn btn-success"
            onClick={() => ackOfferRequest(item)}
          >A</button>
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



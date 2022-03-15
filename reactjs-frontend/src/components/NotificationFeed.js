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
 
acceptbut_render = (item) => {
  const {  ackOfferRequest} = this.props;
  if (item.state===0) {
    return (
    <button className="col-1 text-sm-left btn btn-success"
    onClick={() => ackOfferRequest(item.id)}
  >A</button>
    )
  }
  

}

render() {
    const theItems = this.props.NoteFeed;

    return theItems.map((item) => (
      <li  key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center">
      <span className="col-11">
        <div class="font-weight-bold">{item.category} - {item.category2} - UserID: {item.user_id} AckUserID: {item.ackuserid} State: {item.state}</div>
        <div className="badge badge-primary badge-pill col-3">{item.id}km</div>
        <div>{item.description}</div>
        <div>-</div>
        <div>{this.urgencyview(item.urgency)}</div>
        {this.deliverypickup(item.pickupordelivery,item.maxrange)}        
</span>
      {this.acceptbut_render(item)}

        </li>
      ));    
  }


}



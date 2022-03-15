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

  render_ResetBut = (item) => {
    const { resetOfferRequest} = this.props;
    if (item.state === 1) {
      return (
        <button className="btn btn-primary col-1" 
        onClick={() => resetOfferRequest(item.id)}
        >R</button>
      )
    } else
    {
      return (
        <button className="btn btn-secondary col-1 disabled" disabled 
        onClick={() => resetOfferRequest(item.id)}
        >R</button>
      )
    }
  }  

    

// 
render() {
    const theItems = this.props.OpenitemLst;
    const { editOfferRequest, deleteOfferRequest} = this.props;
    return theItems.map((item) => (
      <li  key={item.id} 
      className="list-group-item d-flex m-0 p-0  justify-content-between align-items-center">
      <span className="col-2">{item.category}</span>
      <span className="col-7 text-sm-left"><span class="font-italic">{item.category2}: </span>{item.description} userid:{item.user_id}</span>
      {this.render_ResetBut(item)}
      <button 
            className="btn btn-success col-1"
            onClick={() => editOfferRequest(item)}
          >E</button>
                <button 
            className="btn btn-danger col-1"
            onClick={() => deleteOfferRequest(item)}
          >D</button>


        </li>
      ));    
  }


}

 

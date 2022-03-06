import React, { Component } from "react";
import {

  } from "reactstrap";

export default class UsefulLinks extends Component {
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

render() {
    const { editProfile } = this.props;

    return (
        <div>
        <li className="list-group-item d-flex justify-content-between align-items-left" >
            <span><a href="https://www.drk.de/"  rel="noreferrer" target="_blank">German Red Cross</a></span>
<span>German Red Cross - Help Organisation </span></li>
<li className="list-group-item d-flex justify-content-between align-items-left" ><span>
   <a href="https://www.caritas-international.de/"  rel="noreferrer" target="_blank">Caritas</a></span><span>asdasdasd asd sad asd dsf dsf23 dsfjkldsfj</span>
    </li>
    </div>

    );
  }
}

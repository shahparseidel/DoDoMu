import './App.css';
import React, { Component } from "react";
import OfferRequestHelp from "./components/HelpEntry";
import UserSettings from "./components/Settings";
import AckOfferRequestHelp from "./components/HelpAck";
import NotificationFeed from "./components/NotificationFeed";
import OpenitemList from "./components/OpenitemList";
import UsefulLinks from "./components/UsefulLinks";
import LoginPage from './components/LoginPage';
import axios from "axios";

const cst_NO_MODAL = 0;
const cst_EDIT_PROFILE_MODAL = 1;
const cst_HELP_MODAL = 2;
const cst_HELP_ACK_MODAL = 3;
const cst_LOGIN_MODAL = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: true,
      activeview: 'notifications',
      needhelp: true,
      token: "",
      geo_loc: "Locationg...",
      NoteFeed: [],
      OpenitemLst: [],
      modalview: cst_LOGIN_MODAL,
      loggedin: false,
      activeItem: {
        category: "Food", 
        category2: "Food2", 
        description: "Test", 
        location : "Test", 
        maxrange: '1',         
        pickupordelivery: '0', 
        urgency: "1",
        state: '0'
      },

    };
  }

  componentDidMount() {
    if (!this.state.loggedin)  this.setState({ modal: cst_LOGIN_MODAL });
    this.refreshviews();
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      console.log(position);
      // this.state.geo_loc = position.coords.latitude.toString() + ' ' + position.coords.longitude.toString();
    });
  }

  toggle = () => {
    this.setState({ modal: cst_NO_MODAL });
  };

 // Download the Notification Feed from the server in the background and store feed in NoteFeed
 refreshNotificationFeed = () => {
    axios
      .get("./api/offersandrequests/")
      .then((res) => this.setState({ NoteFeed: res.data }))
      .catch((err) => console.log(err));
  }; 
  // Download the Open Item list from the server in the background and store feed in OpenitemLst
  refreshOpenitemLst= () => {
    axios
      .get("./api/offersandrequests/")
      .then((res) => this.setState({ OpenitemLst: res.data }))
      .catch((err) => console.log(err));
  }; 
  // Refresh All Views in the system (on bootup and when new items were added)
  refreshviews = () => {
    this.refreshNotificationFeed();
    this.refreshOpenitemLst();
    console.log('Refresh-App.js');
  }

  updatetoken = (token) => {
    this.state.token = token;
    console.log(this.state.token);
  }

  handleLoginSave = (item) => {
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Token '+this.state.token,
    }
    console.log(item,headers);
    axios
    .post("http://127.0.0.1:3000/dj-rest-auth/login/", item, {headers: headers
    })
    .then((res) => this.updatetoken(res.data.key))
    .catch((err) => console.log(err));
  }

  handleOfferRequestSubmit = (item) => {
    this.toggle();
    console.log(item)
    if (item.id) {
      axios
        .put(`/api/offersandrequests/${item.id}/`, item)
        .then((res) => this.refreshviews())
        .catch((err) => console.log(err));
      return;
    }
    axios
      .post("/api/offersandrequests/", item)
      .then((res) => this.refreshviews())
      .catch((err) => console.log(err));

  };

  /* handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/dodomus/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/dodomus/", item)
      .then((res) => this.refreshList());

  }; */


 
  createRequestOffer = () => {


    const item = { helprequest: false, category: "Food", category: "Food2", description: "Test", location : "Test", maxrange: '1', pickupordelivery: '0', urgency: "1",state: '0'};
    this.setState({ activeItem: item,  modal: cst_HELP_MODAL });
  };


  deleteOfferRequest = (item) => {
    axios
    .delete(`/api/offersandrequests/${item.id}/`)
    .then((res) => this.refreshviews());
  }

  editOfferRequest = (item) => {
    //const item = { category: "Food", description: "Test", location : "Test", maxrange: '1', pickupordelivery: '0', urgency: "1",state: '0'};
    this.setState({ activeItem: item, modal: cst_HELP_MODAL });
  };


  editProfile = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: cst_EDIT_PROFILE_MODAL});
  };
  
  ackOfferRequest = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: cst_EDIT_PROFILE_MODAL});
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

/*   displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  }; */

  /* renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  }; */


 
  
 


  rendernotefeed = () => {
    return (
      <NotificationFeed
      NoteFeed = {this.state.NoteFeed}
      ackOfferRequest={this.ackOfferRequest}
    />
      );
  }
  renderopenitemfeed = () => {
    return (
      <OpenitemList
      OpenitemLst = {this.state.OpenitemLst}
      editOfferRequest={this.editOfferRequest}
      deleteOfferRequest={this.deleteOfferRequest}
    />
    );
  }
  renderusefullinksfeed = () => {
    return (
      <UsefulLinks
      editProfile={this.editProfile}
      />
      );    
  }
  swnotefeed = () => {
    this.setState({activeview: 'notifications'});
  }
  swmitemsfeed = () => {
  this.setState({activeview: 'openitemlist'});
  }
  swusefullinkfeed = () => {
    this.setState({activeview: 'usefullinks'});
  }
  renderfeed = () => {
    if (this.state.activeview === 'notifications') return(this.rendernotefeed());
    if (this.state.activeview === 'openitemlist') return(this.renderopenitemfeed());
    if (this.state.activeview === 'usefullinks') return(this.renderusefullinksfeed());
  }
  renderHelpBt = () => {
    if (this.state.needhelp === true)
    return(
      'Request Help'
    );
    if (this.state.needhelp  === false)
    return(
      'Offer Help'
    );
  }

  renderItems = () => {
/*     const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    ); */
 
      const newItems = this.state.NoteFeed;
  

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };


  render() {
  
    return (
      <main className="container">
        <h3 className="text-red text-center my-2">DoDoMu</h3>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <table><td>
                <button 
                   className="btn btn-primary btn-sm"
                  onClick={this.swnotefeed}>
                Note Feed
                </button>
                </td>
                <td>
                <button
                   className="btn btn-primary btn-sm"
                    onClick={this.swmitemsfeed}>
                Open Items 
                </button>
                </td> 
                <td>
                <button
                   className="btn btn-outline-danger btn-sm"
                    onClick={this.createRequestOffer}
                    >
                    {this.renderHelpBt()}
                </button>
                </td>

                <td>
                <button
                   class="btn btn-primary btn-sm"
                   onClick={this.swusefullinkfeed}>
                Useful Links
                </button>
                </td>
                <td>
                <button
                   className="btn btn-outline-primary btn-sm"
                    onClick={this.editProfile}>
                Edit Profile
                </button>
                </td>
                </table>
              </div>
              <ul className="badge badge-success">Logged in as Master of Mind (hello@kitto.com) {this.geo_loc}</ul>
              <ul className="list-group list-group-flush border-top-0">
              {this.renderfeed()}

              </ul>
              {/* {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul> */}
            </div>
          </div>
        </div>
        {(this.state.modal === cst_LOGIN_MODAL) ? (
          <LoginPage
            toggle={this.toggle}
            onSave={this.handleLoginSave}
          />
        ) : null}
        {(this.state.modal === cst_HELP_MODAL) ? (
          <OfferRequestHelp
            activeItem={this.state.activeItem}
            needhelp={this.state.needhelp}
            toggle={this.toggle}
            onSave={this.handleOfferRequestSubmit}
          />
        ) : null}
        {(this.state.modal === cst_HELP_ACK_MODAL) ? (
          <AckOfferRequestHelp
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleAckOfferRequestSubmit}
          />
        ) : null}
        {(this.state.modal === cst_EDIT_PROFILE_MODAL) ? (
          <UserSettings
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleUserSettingsSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
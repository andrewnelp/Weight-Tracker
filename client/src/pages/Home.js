import React, { Component } from "react";
import AppNavbar from "../components/AppNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import CardUp from "../components/CardUp";
import Table from "../components/Table";

import { Panel } from "../components/Panel";
import { Rating } from "../components/Rating";
import axios from "axios";
import Nav from "../components/Nav";
// import ListData from "../components/ListData";
// import EditData from "../components/EditData";
// import CreateData from "./components/CreateData";

class Home extends Component {
  state = {
    panelCollapsed: true,
    joke: "",
    value: [],
    weight: [],
    steps: [],
    fasting: [],
    other: [],
    feel: []
  };

  componentDidMount() {
    axios
      .get(
        "https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw?type=single"
      )
      .then(response => {
        this.setState({ joke: response.data.joke });
        console.log(response.data.joke);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { joke } = this.state;
    return (
      <div className="Home">
        <Router>
          <AppNavbar />
          <Nav />

          <br />
          {/* <Route path="/" exact component={ListData} />
          <Route path="/edit/:id" component={EditData} />
          <Route path="/create" component={CreateData} /> */}
        </Router>
        <div className="container" style={{ marginTop: "2em", maxWidth: 1000 }}>
          <Panel
            header="Activities and Goals"
            style={{ marginTop: "2em" }}
            toggleable={true}
          >
            <div className="row justify-content-around">
              <div className="col-4">
                <CardUp
                  title={"Last Activity"}
                  weight={this.state.weight}
                  steps={this.state.steps}
                  fasting={this.state.fasting}
                  other={this.state.other}
                  feel={""}
                  value={this.state.value}
                />
              </div>
              <div className="col-4">
                <CardUp
                  title={"Goals"}
                  weight={190}
                  steps={10000}
                  fasting={16}
                  other={45}
                  feel={"Amazing"}
                  value={5}
                />
              </div>
            </div>
          </Panel>
          <Panel
            header="Programming Joke of a Day"
            style={{ marginTop: "2em" }}
            toggleable={true}
            collapsed={this.state.panelCollapsed}
            onToggle={e => this.setState({ panelCollapsed: e.value })}
          >
            <p style={{ fontSize: 20 }}>{joke}</p>
          </Panel>

          <Panel header="Table" style={{ marginTop: "2em" }} toggleable={true}>
            <Table />
          </Panel>
          <Panel header="Home" style={{ marginTop: "2em" }} toggleable={true}>
            <h1>
              Home<span className="badge badge-secondary">New</span>
            </h1>
            <Rating
              value={this.state.value}
              onChange={e => this.setState({ value: e.value })}
              stars={5}
            />
          </Panel>
        </div>
      </div>
    );
  }
}

export default Home;

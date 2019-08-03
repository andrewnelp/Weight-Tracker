import React, { Component } from "react";
import "../../App.css";
import CardUp from "../CardUp";
import Table from "../Table";

import { Panel } from "../Panel";
import axios from "axios";
// import EditData from "../EditData";
// import CreateData from "../CreateData";

class List extends Component {
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
          <Panel header="Charts" style={{ marginTop: "2em" }} toggleable={true}>
            <h1>
              Charts<span className="badge badge-secondary">New</span>
            </h1>
          </Panel>
        </div>
      </div>
    );
  }
}

export default List;

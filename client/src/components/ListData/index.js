import React, { Component } from "react";
import API from "../../utilsAPi/API";
import "../../App.css";
import CardUp from "../CardUp";
import Table from "../Table";
import { Progress } from "reactstrap";
import { Panel } from "../Panel";
import axios from "axios";
// import EditData from "../EditData";
// import CreateData from "../CreateData";

class List extends Component {
  state = {
    panelCollapsed: true,
    joke: "",
    // dayDatas: "",
    value: 3
    // weight: [190],
    // steps: [8000],
    // fasting: [14],
    // other: [],
    // feel: []
  };

  getJoke() {
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
  componentDidMount() {
    this.getJoke();
    API.getDatas()
      // .then(response => console.log(response.data))
      .then(response => {
        this.setState({ dayDatas: response.data });
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  deleteData = id => {
    API.deleteData(id).then(res => console.log(res.data));
    this.setState({
      dayDatas: this.state.dayDatas.filter(el => el._id !== id)
    });
  };

  render() {
    const { joke } = this.state;
    return (
      <div className="Home">
        <div className="container">
          <Panel
            header="Activities and Goals"
            // style={{ marginTop: "1em" }}
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
                  // value={this.state.value}
                  value={4}
                />
              </div>
              <div className="col-4">
                <CardUp
                  title={"Goals"}
                  weight={180}
                  steps={10000}
                  fasting={16}
                  other={45}
                  feel={""}
                  value={5}
                />
              </div>
            </div>
            <br />
            <div>
              <p> Weight </p>
              <Progress value={(this.state.weight / 250) * 100}>
                {(this.state.weight / 230) * 100}%
              </Progress>
              <br />
              <p> Steps </p>
              <Progress value={50}>1/2</Progress>
              <br />
              <p> Fasting </p>
              <Progress value={75}>You're almost there!</Progress>
              <br />
              <Progress color="success" value="100">
                You did it!
              </Progress>
              <br />
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

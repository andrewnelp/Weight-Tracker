import React, { Component } from "react";
import API from "../../utilsAPi/API";
import { Link } from "react-router-dom";
import "../../App.css";
import CardUp from "../CardUp";
// import Table from "../Table";
import { Progress, Button } from "reactstrap";
import { Panel } from "../Panel";
import axios from "axios";
// import EditData from "../EditData";
// import CreateData from "../CreateData";

const Day = props => (
  <tr>
    <td>{props.curDay.date.substring(0, 10)}</td>
    <td>{props.curDay.weight}</td>
    <td>{props.curDay.steps}</td>
    <td>{props.curDay.activity}</td>
    <td>{props.curDay.duration}</td>
    <td>{props.curDay.feel}</td>
    <td>{props.curDay.fasting}</td>
    <td>{props.curDay.diet}</td>

    <td>
      <Button className="btn btn-info btn-sm" to={"/edit/" + props.curDay._id}>
        <i class="far fa-edit" />
      </Button>{" "}
      <Button
        className="btn btn-secondary btn-sm"
        // href="#"
        onClick={() => {
          props.deleteData(props.curDay._id);
        }}
      >
        <i class="far fa-trash-alt" />
      </Button>
    </td>
  </tr>
);

class List extends Component {
  constructor(props) {
    super(props);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      panelCollapsed: true,
      joke: "",
      dayDatas: [],
      value: 1,
      weight: [],
      steps: [],
      fasting: [],
      feel: []
    };
  }

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

  loadData() {
    API.getDatas()
      .then(response => {
        this.setState({
          dayDatas: response.data
        });
        let { weight, steps, fasting, feel } = response.data[0];

        this.setState({
          weight: weight,
          steps: steps,
          fasting: fasting,
          feel: feel
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getJoke();
    this.loadData();
  }

  deleteData(id) {
    API.deleteData(id).then(res => console.log(res.data));
    this.setState({
      dayDatas: this.state.dayDatas.filter(el => el._id !== id)
    });
    this.loadData();
  }

  dayDataList() {
    return this.state.dayDatas.map(curDay => {
      return (
        <Day curDay={curDay} deleteData={this.deleteData} key={curDay._id} />
      );
    });
  }

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
              <div className="col-3">
                <CardUp
                  title={"Last Day"}
                  weight={this.state.weight}
                  steps={this.state.steps}
                  fasting={this.state.fasting}
                  feel={this.state.feel}
                  value={5}
                  colorWeight={
                    this.state.weight < 190 ? "rgb(40,167,69)" : "red"
                  }
                  colorSteps={
                    this.state.steps > 9990 ? "rgb(40,167,69)" : "red"
                  }
                  colorFasting={
                    this.state.fasting > 15 ? "rgb(40,167,69)" : "red"
                  }
                  colorFeel={
                    this.state.fasting === "Amazing" ? "rgb(40,167,69)" : "red"
                  }
                />
              </div>
              <div className="col-3">
                <CardUp
                  title={"Goals"}
                  weight={190}
                  steps={10000}
                  fasting={16}
                  feel="Amazing"
                  value={5}
                />
              </div>
              <div className="col-3">
                <CardUp
                  title={"Best"}
                  weight={190}
                  steps={10000}
                  fasting={16}
                  feel="Amazing"
                  value={5}
                />
              </div>
            </div>
            <br />
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <p style={{ fontSize: 22 }}> Weight </p>
                <Progress
                  value={(190 / this.state.weight) * 100}
                  color={this.state.weight < 190 ? "success" : "secondary"}
                >
                  {Math.round((190 / this.state.weight) * 100)}%
                </Progress>
                <br />
                <p style={{ fontSize: 22 }}> Steps </p>
                <Progress
                  value={(this.state.steps / 10000) * 100}
                  color={this.state.steps > 10000 ? "success" : "secondary"}
                >
                  {Math.round((this.state.steps / 10000) * 100)}%
                </Progress>
                <br />
                <p style={{ fontSize: 22 }}> Fasting </p>
                <Progress
                  value={(this.state.fasting / 16) * 100}
                  color={this.state.fasting > 16 ? "success" : "secondary"}
                >
                  {Math.round((this.state.fasting / 16) * 100)}%
                </Progress>
                <br />
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
            <p className="Joke" style={{ fontSize: 20 }}>
              {joke}
            </p>
          </Panel>

          <Panel
            header="Logged Day Activity"
            style={{ marginTop: "2em" }}
            toggleable={true}
          >
            <div>
              <table className="table shadow-lg p-3 mb-5 bg-white rounded mt-3">
                <thead
                  className="thead-info"
                  // style={{ backgroundColor: "light-gray" }}
                >
                  <tr>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Steps</th>
                    <th>Activity</th>
                    <th>Duration</th>
                    <th>Feel</th>
                    <th>Fasting Time</th>
                    <th>Diet Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.dayDataList()}</tbody>
              </table>
            </div>
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

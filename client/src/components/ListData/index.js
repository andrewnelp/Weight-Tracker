import React, { Component } from "react";
import API from "../../utilsAPi/API";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import CardUp from "../CardUp";
import CardWeather from "../CardWeather";
import { Progress, Button } from "reactstrap";
import { Panel } from "../Panel";
import axios from "axios";
import Chart from "../Chart";

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
      <Link className="btn btn-info btn-sm" to={"/edit/" + props.curDay._id}>
        <i className="far fa-edit" />
      </Link>{" "}
      <Button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          props.deleteData(props.curDay._id);
        }}
      >
        <i className="far fa-trash-alt" />
      </Button>
    </td>
  </tr>
);

const API_KEY = "d628cd992692acc57119e8ad46fcfa18";

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
      feel: [],
      chartData: {},
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      wind: undefined,
      city: undefined,
      error: undefined
    };
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=miami,usa&appid=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      wind: data.wind.speed
    });
  };

  componentWillMount = () => {
    this.getChartData();
  };

  getChartData() {
    let stepsArr = [];
    let weightArr = [];
    let fastingArr = [];
    let dateArr = [];

    // Ajax calls here
    API.getDatas()
      .then(response => {
        response.data.forEach(w => {
          stepsArr.unshift(w.steps);
          weightArr.unshift(w.weight);
          fastingArr.unshift(w.fasting);
          dateArr.unshift(w.date.substring(0, 10));
        });
      })
      .then(() => {
        console.log("chartData");
        this.setState({
          chartData: {
            labels: dateArr,
            datasets: [
              {
                label: "Weight",
                data: weightArr,
                backgroundColor: ["rgb(23,162,184)"],
                borderWidth: 2
              }
            ]
          }
        });
      })
      .catch(err => console.log(err));
  }

  getJoke() {
    axios
      .get(
        "https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw?type=single"
      )
      .then(response => {
        this.setState({ joke: response.data.joke });
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadData() {
    let stepsArr = [];
    let weightArr = [];
    let fastingArr = [];
    let dateArr = [];
    API.getDatas()
      .then(response => {
        this.setState({
          dayDatas: response.data
        });
        let { weight, steps, fasting, feel } = response.data[0];

        response.data.forEach(w => {
          stepsArr.push(w.steps);
          weightArr.push(w.weight);
          fastingArr.push(w.fasting);
          dateArr.push(w.date.substring(0, 10));
        });
        let stepsMax = Math.max(...stepsArr);
        let weightMin = Math.min(...weightArr);
        let fastingMax = Math.max(...fastingArr);

        this.setState({
          weight: weight,
          steps: steps,
          fasting: fasting,
          feel: feel,
          stepsMax: stepsMax,
          weightMin: weightMin,
          fastingMax: fastingMax
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getJoke();
    this.loadData();
    this.getWeather();
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
                  weight={this.state.weightMin}
                  steps={this.state.stepsMax}
                  fasting={this.state.fastingMax}
                  feel="Amazing"
                  value={5}
                />
              </div>
              {/* <div className="col-3">
                <CardWeather
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  wind={this.state.wind}
                  // feel="Amazing"
                  value={5}
                />
              </div> */}
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
              <div className="col-3">
                <CardWeather
                  city={this.state.city}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  wind={this.state.wind}
                  // feel="Amazing"
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
            <p className="Joke" style={{ fontSize: 20 }}>
              {joke}
            </p>
          </Panel>

          <Panel
            header="Logged Day Activity"
            style={{ marginTop: "2em" }}
            toggleable={true}
          >
            <div className="row justify-content-center">
              <div className="col-11">
                <table className="table shadow-lg p-3 mb-5 bg-white rounded mt-3">
                  <thead className="thead-info">
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
            </div>
          </Panel>
          <Panel
            header="Charts"
            style={{ marginTop: "2em" }}
            toggleable={true}
            className="mb-5"
          >
            <Chart chartData={this.state.chartData} legendPosition="bottom" />
          </Panel>
        </div>
      </div>
    );
  }
}

export default List;

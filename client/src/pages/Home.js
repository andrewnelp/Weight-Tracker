import AppNavbar from "../components/AppNavbar";
import React, { Component } from "react";
import { Panel } from "../components/Panel";
import { Rating } from "../components/Rating";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
// import { Slider } from "primereact/slider";
import { Button } from "reactstrap";
import axios from "axios";

class Home extends Component {
  state = {
    panelCollapsed: true,
    joke: ""
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
        <AppNavbar />
        <div className="container" style={{ marginTop: "5em", maxWidth: 1000 }}>
          <Panel
            header="Activities and Goals"
            style={{ marginTop: "2em" }}
            toggleable={true}
            collapsed={this.state.panelCollapsed}
            onToggle={e => this.setState({ panelCollapsed: e.value })}
          >
            <div className="row justify-content-around">
              <div className="col-4">
                <Card>
                  <CardImg
                    style={{ width: 100 }}
                    top
                    src="https://ackersonfitness.com/wp-content/uploads/2019/05/barbell-biceps-black-841125-300x300.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Last Activity</CardTitle>
                    <CardSubtitle>Weight: </CardSubtitle>
                    <CardSubtitle>Steps: </CardSubtitle>
                    <CardSubtitle>Fasting: </CardSubtitle>
                    <CardSubtitle>Other Acivity: </CardSubtitle>
                    <CardSubtitle> Feel: </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
              <div className="col-4">
                <Card>
                  <CardImg
                    style={{ width: 100 }}
                    top
                    src="https://ackersonfitness.com/wp-content/uploads/2019/05/barbell-biceps-black-841125-300x300.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Goals</CardTitle>
                    <CardSubtitle>Weight: </CardSubtitle>
                    <CardSubtitle>Daily Steps: </CardSubtitle>
                    <CardSubtitle>Daily Fasting: </CardSubtitle>
                    <CardSubtitle>Other Acivity: </CardSubtitle>
                    <CardSubtitle>
                      Feel: {"Amazing "}
                      <Rating
                        value={5}
                        onChange={e => this.setState({ value: e.value })}
                        stars={5}
                      />
                    </CardSubtitle>
                  </CardBody>
                </Card>
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
          <Panel header="Table" style={{ marginTop: "2em" }} toggleable={true}>
            The story begins as Don Vito Corleone, the head of a New York Mafia
            family, oversees his daughter's wedding. His beloved son Michael has
            just come home from the war, but does not intend to become part of
            his father's business. Through Michael's life the nature of the
            family business becomes clear. The business of the family is just
            like the head of the family, kind and benevolent to those who give
            respect, but given to ruthless violence whenever anything stands
            against the good of the family.
          </Panel>
          {/* <Slider
            value={this.state.value}
            onChange={e => this.setState({ value: e.value })}
          /> */}
          <br />
          <Button color="danger">Danger!</Button>
        </div>
      </div>
    );
  }
}

export default Home;

import AppNavbar from "../components/AppNavbar";
import "../App.css";
import CardUp from "../components/CardUp";
import React, { Component } from "react";
import { Panel } from "../components/Panel";
import { Rating } from "../components/Rating";
import axios from "axios";

class Home extends Component {
  state = {
    panelCollapsed: true,
    joke: "",
    value: 3
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
      <div className="Home" style={{ fontFamily: "Roboto Slab" }}>
        <AppNavbar />
        <div className="container" style={{ marginTop: "5em", maxWidth: 1000 }}>
          <Panel
            header="Activities and Goals"
            style={{ marginTop: "2em" }}
            toggleable={true}
          >
            <div className="row justify-content-around">
              <div className="col-4">
                <CardUp
                  title={"Last Activity"}
                  weight={190}
                  steps={10000}
                  fasting={16}
                  other={45}
                  feel={"Amazing"}
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
        </div>
      </div>
    );
  }
}

export default Home;

// import Nav from "../components/Nav";
import AppNavbar from "../components/AppNavbar";
import React, { Component } from "react";
import { Panel } from "../components/Panel";
import { Rating } from "../components/Rating";
import { Slider } from "primereact/slider";
import { Button } from "reactstrap";

class Home extends Component {
  state = {
    panelCollapsed: true
  };
  render() {
    return (
      <div className="App">
        <div className="AppNavbar">
          <AppNavbar />
        </div>

        <div className="container">
          <Panel
            header="Joke of a Day"
            style={{ marginTop: "2em" }}
            toggleable={true}
            collapsed={this.state.panelCollapsed}
            onToggle={e => this.setState({ panelCollapsed: e.value })}
          >
            The story begins as Don Vito Corleone, the head of a New York Mafia
            family, oversees his daughter's wedding. His beloved son Michael has
            just come home from the war, but does not intend to become part of
            his father's business.
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
          <Slider
            value={this.state.value}
            onChange={e => this.setState({ value: e.value })}
          />
          <Button color="danger">Danger!</Button>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Rating } from "../Rating";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default class CardUp extends Component {
  render() {
    return (
      <div>
        <Card className="Card mt-2 shadow-lg p-3 mb-5 bg-white rounded">
          <CardBody style={{ backgroundColor: "rgb(233,236,239)" }}>
            <CardTitle style={{ fontSize: 24 }}>
              <strong>{this.props.title}</strong>
              <hr />
            </CardTitle>
            <CardSubtitle
              style={{ fontSize: 20, color: this.props.colorWeight }}
            >
              Weight: {this.props.weight}
            </CardSubtitle>
            <CardSubtitle
              style={{ fontSize: 20, color: this.props.colorSteps }}
            >
              Steps: {this.props.steps}
            </CardSubtitle>
            <CardSubtitle
              style={{ fontSize: 20, color: this.props.colorFasting }}
            >
              Fasting: {this.props.fasting}
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: 20, color: this.props.colorFeel }}>
              Feel: {this.props.feel}
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: 22 }}>
              <Rating
                value={this.props.value}
                onChange={e => this.setState({ value: e.value })}
                stars={5}
              />
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

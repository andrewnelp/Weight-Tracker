import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Rating } from "../Rating";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default class CardUp extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle style={{ fontSize: 22 }}>
              <strong>{this.props.title}</strong>
            </CardTitle>
            <CardSubtitle>Weight: {this.props.weight}</CardSubtitle>
            <CardSubtitle>Steps: {this.props.steps}</CardSubtitle>
            <CardSubtitle>Fasting: {this.props.fasting}</CardSubtitle>
            <CardSubtitle>Other Acivity:{this.props.other} </CardSubtitle>
            <CardSubtitle>
              {" "}
              Feel: {this.props.feel}
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

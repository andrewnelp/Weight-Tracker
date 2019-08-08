import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Rating } from "../Rating";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default class CardWeather extends Component {
  render() {
    return (
      <div>
        <Card className="Card mt-2 shadow-lg p-3 mb-5 bg-white rounded">
          <CardBody>
            <CardTitle style={{ fontSize: 24 }}>
              <strong>Miami Weather</strong>
              <hr />
            </CardTitle>
            <CardSubtitle style={{ fontSize: 20 }}>
              Temp: {this.props.temperature} &deg;F
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: 20 }}>
              Humidity: {this.props.humidity}%
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: 20 }}>
              {this.props.description}
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: 20 }}>
              Wind:{this.props.wind}
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

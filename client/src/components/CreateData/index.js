import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Rating } from "../Rating";
import "react-datepicker/dist/react-datepicker.css";

// export default class CreateData extends Component {
//   render() {
//     return (
//       <div>
//         <p> Create Data component</p>
//         <Link to="/">← Back to Home</Link>
//       </div>
//     );
//   }
// }
export default class CreateData extends React.Component {
  state = {
    date: new Date(),
    value: [],
    weight: [],
    steps: [],
    fasting: [],
    other: [],
    feels: []
  };

  onChangeDate = date => {
    this.setState({
      date: date
    });
  };

  onChangeWeight = e => {
    this.setState({
      weight: e.target.value
    });
  };

  onChangeSteps = e => {
    this.setState({
      steps: e.target.value
    });
  };

  onChangeActivity = e => {
    this.setState({
      activity: e.target.value
    });
  };

  onChangeDuration = e => {
    this.setState({
      duration: e.target.value
    });
  };

  onChangeFeels = e => {
    this.setState({
      feels: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      date: this.state.date,
      weight: this.state.weight,
      steps: this.state.steps,
      activity: this.state.activity,
      duration: this.state.duration,
      feels: this.state.feels,
      fasting: this.state.fasting,
      diet: this.state.diet
    };

    console.log(data);

    // axios.post('http://localhost:5000/exercises/add', exercise)
    //   .then(res => console.log(res.data));

    // window.location = '/';
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: 900 }}>
        <h3>Enter Your Day Data</h3>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input
              type="text"
              name="weight"
              id="weight"
              placeholder="Enter Your Weight"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </FormGroup>
          <FormGroup>
            <Label for="steps">Steps</Label>
            <Input
              type="text"
              name="steps"
              id="steps"
              placeholder="Enter Today's Steps"
              value={this.state.steps}
              onChange={this.onChangeSteps}
            />
          </FormGroup>
          <FormGroup>
            <Label for="activity">Activity</Label>
            <Input
              type="select"
              name="activity"
              id="activity"
              placeholder="Enter Today's Activity"
              value={this.state.activity}
              onChange={this.onChangeActivity}
            >
              <option>Select</option>
              <option>Run</option>
              <option>Swim</option>
              <option>Jog</option>
              <option>Weight Lifting</option>
              <option>Cross Training</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration in Min</Label>
            <Input
              type="select"
              name="duration"
              id="duration"
              placeholder="Enter Today's Activity Duration"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            >
              <option>Select</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>60</option>
              <option>70</option>
              <option>80</option>
              <option>90</option>
            </Input>
          </FormGroup>

          {/* <Rating
            value={this.state.value}
            onChange={this.onChangeFeel}
            stars={5}
          /> */}
          <Button>Submit</Button>
          <p>
            <Link to="/">← Back to Home</Link>
          </p>
        </Form>
      </div>
    );
  }
}

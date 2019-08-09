import React from "react";
import { Link } from "react-router-dom";
import API from "../../utilsAPi/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

export default class CreateData extends React.Component {
  state = {
    date: new Date(),
    weight: [],
    steps: 0,
    activity: 0,
    duration: 0,
    feel: "Amazing",
    fasting: 0,
    diet: "16 hour fasting",
    popoverOpen: false
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  componentDidMount() {
    // axios
    //   .get("http://localhost:3000/api/enterData/" + this.props.match.params.id)
    API.getData(this.props.match.params.id)
      .then(response => {
        this.setState({
          date: new Date(response.data.date),
          weight: response.data.weight,
          steps: response.data.steps,
          activity: response.data.activity,
          duration: response.data.duration,
          feel: response.data.feel,
          fasting: response.data.fasting,
          diet: response.data.diet
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmit = e => {
    e.preventDefault();

    const dayData = {
      date: this.state.date,
      weight: this.state.weight,
      steps: this.state.steps,
      activity: this.state.activity,
      duration: this.state.duration,
      feel: this.state.feel,
      fasting: this.state.fasting,
      diet: this.state.diet
    };
    // let regex = /^[a-zA-Z]+$/;
    // if (this.state.weight.length < 3) {
    //   alert("Enter Your Weight Correctly in Numbers");
    // } else if (this.state.steps.length < 4 || this.state.steps.match(regex)) {
    //   alert("Steps should be more than 4 digits and in numbers");
    // } else {
    API.updateData(this.props.match.params.id, dayData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    // }

    // window.location = "/";
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onChangeDate = date => {
    this.setState({
      date: date
    });
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: 900 }}>
        <h3 className="fun">Edit Day Data</h3>
        <Form onSubmit={this.onSubmit} className="mb-5">
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
          <FormGroup>
            <Label for="feel">Feel</Label>
            <Input
              type="text"
              name="feel"
              id="feel"
              placeholder="Enter Your Weight"
              value={this.state.feel}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="steps">Fasting Time</Label>
            <Input
              type="text"
              name="fasting"
              id="fasting"
              placeholder="Fasting"
              value={this.state.fasting}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="diet">Diet</Label>
            <Input
              type="text"
              name="diet"
              id="diet"
              placeholder="Diet"
              value={this.state.diet}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={this.toggle}
          >
            <PopoverHeader>Data Edited!</PopoverHeader>
            <PopoverBody>Thanks</PopoverBody>
          </Popover>
          <Button
            className="fun"
            id="Popover1"
            disabled={
              !(
                this.state.date &&
                this.state.weight &&
                this.state.steps &&
                this.state.activity
              )
            }
            onClick={this.onSubmit}
            label="Info"
            // className="p-button-info"
          >
            Edit
          </Button>
          <Link style={{ marginLeft: 100 }} to="/">
            ← Back to Home
          </Link>
        </Form>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Rating } from "../Rating";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateData extends React.Component {
                 state = {
                   date: new Date(),
                   // value: [],
                   weight: [],
                   steps: [],
                   fasting: [],
                   other: [],
                   feel: []
                 };

                 onSubmit = e => {
                   e.preventDefault();

                   const data = {
                     date: this.state.date,
                     weight: this.state.weight,
                     steps: this.state.steps,
                     activity: this.state.activity,
                     duration: this.state.duration,
                     feel: this.state.feel,
                     fasting: this.state.fasting,
                     diet: this.state.diet
                   };

                   console.log(data);
                 };

                 handleInputChange = event => {
                   const { name, value } = event.target;
                   this.setState({
                     [name]: value
                   });
                 };

                 onChangeDate = (date) => {
                   this.setState({
                     date: date
                   });
                 }

                 //  handleFormSubmit = event => {
                 //    event.preventDefault();
                 //   //  if (this.state.title && this.state.author) {
                 //   //    API.saveBook({
                 //   //      title: this.state.title,
                 //   //      author: this.state.author,
                 //   //      synopsis: this.state.synopsis
                 //   //    })
                 //   //      .then(res => this.loadBooks())
                 //   //      .catch(err => console.log(err));
                 //   //  }
                 //   console.log
                 //  };

                 render() {
                   return (
                     <div
                       className="container"
                       style={{ maxWidth: 900 }}
                     >
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
                           <Label for="duration">
                             Duration in Min
                           </Label>
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
                           <Label for="steps">
                             Fasting Time
                           </Label>
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
                           <Label for="diet">Current Diet</Label>
                           <Input
                             type="select"
                             name="diet"
                             id="diet"
                             placeholder="Current Diet"
                             value={this.state.diet}
                             onChange={this.handleInputChange}
                           >
                             <option>Select</option>
                             <option>Intermit Fasting</option>
                             <option>Keto</option>
                             <option>Fasting</option>
                             <option>Cheat Day</option>
                           </Input>
                         </FormGroup>

                         {/* <Rating
            value={this.state.value}
            onChange={this.onChangeFeel}
            stars={5}
          /> */}
                         <Button
                           disabled={
                             !(
                               this.state.date &&
                               this.state.weight
                             )
                           }
                           onClick={this.onSubmit}
                         >
                           Submit
                         </Button>
                         <p>
                           <Link to="/">← Back to Home</Link>
                         </p>
                       </Form>
                     </div>
                   );
                 }
               }

import React from "react";
import { Table } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Table className="col-6 col-md-12">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Steps</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>Feel</th>
            <th>Fasting Time</th>
            <th>Diet Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>{this.dayDataList()}</tr>
        </tbody>
      </Table>
    );
  }
}

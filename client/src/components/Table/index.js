import React from "react";
import { Table } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Table>
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
          <tr>
            <th scope="row">Today</th>
            <td>189</td>
            <td>9999</td>
            <td>Run</td>
            <td>44</td>
            <td>5</td>
            <td>15</td>
            <td>Keto</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

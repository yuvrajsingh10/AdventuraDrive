import React from "react";
import classes from "./DashboardOrderList.module.css";

const DashboardOrderList = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <table className="table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CAR NAMES</th>
            <th>PICK UP LOCATION</th>
            <th>DROP OFF LOCATION</th>
            <th>PICK UP DATE</th>
            <th>RETURN DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01236</td>
            <td>Jeep Renegade</td>
            <td>New York</td>
            <td>Los Angeles</td>
            <td>March 23,2023</td>
            <td>March 10,2023</td>
            <td className={classes.status}><span>Completed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardOrderList;

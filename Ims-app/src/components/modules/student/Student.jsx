import React from "react";
import "./Student.css";
import boy from "./boy.jpg";

const Student = (props) => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="img">
            <img className="pic" src={boy} alt="profile-pic" />
          </div>
          <table>
            <tr>
              <th>Name:</th>
              <td>{props.name}</td>
            </tr>
            <tr>
              <th>Parent name:</th>
              <td>{props.pname}</td>
            </tr>
            <tr>
              <th>Relationship:</th>
              <td>{props.reln}</td>
            </tr>
            <tr>
              <th>Role:</th>
              <td>{props.role}</td>
            </tr>
          </table>
        </div>
        <div className="right">
          <table>
            <tr>
              <th>Email:</th>
              <td>{props.email}</td>
            </tr>
            <tr>
              <th>Dob:</th>
              <td>{props.dob}</td>
            </tr>
            <tr>
              <th>Ph:</th>
              <td>{props.ph}</td>
            </tr>
            <tr>
              <th>Branch:</th>
              <td>{props.branch}</td>
            </tr>
            <tr>
              <th>Sem:</th>
              <td>{props.sem}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Student;

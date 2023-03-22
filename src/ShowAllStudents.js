import React from "react";
import { Link } from "react-router-dom";

const ShowAllStudents = ({ handleClickAllStudents }) => {
  return (
    <li className="student" onClick={handleClickAllStudents}>
      <Link className="link" to={"/"}>
        Show all students
      </Link>
    </li>
  );
};

export default ShowAllStudents;

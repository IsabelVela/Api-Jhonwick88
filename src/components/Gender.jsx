import React from "react";
import { Chip } from "./Chip";
import "./Gender.css"

const Gender = ({ moviepostman }) => {
  const gender = moviepostman.Genre ? moviepostman.Genre.split(",") :[]
  return (
    <div className="gender-container">
      {
        gender.map((genero, index) => (
        <Chip genero={genero} key = {index} />
      ))
      }
    </div>
  );
};

export default Gender

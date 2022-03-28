import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { userContext } from "../context/UserContext";

// import axios from "axios";
import "./Agenda.css";

const DatePicker = () => {
  const [place, setPlace] = useState("somePlace");
  const [WelfareType, setWelfareType] = useState("Choose type of welfare here");

  return (
    <div className="calendar-container">
      <div className="arrow-container">
        <div className="arrow-left">◀️</div>
        <div className="day-container">
            <div className="day">Lundi 1 Janviembre</div>
            <div className="hour">-</div>
            <div className="hour">15h</div>
            <div className="hour">16h</div>
        </div>
        <div className="day-container">
            <div className="day">Lundi 8 Janviembre</div>
            <div className="hour">14h</div>
            <div className="hour">15h</div>
            <div className="hour">16h</div>
        </div>
        <div className="day-container">
            <div className="day">Lundi 15 Janviembre</div>
            <div className="hour">14h</div>
            <div className="hour">-</div>
            <div className="hour">-</div>
        </div>
        <div className="day-container">
            <div className="day">Lundi 22 Janviembre</div>
            <div className="hour">14h</div>
            <div className="hour">15h</div>
            <div className="hour">16h</div>
        </div>
        <div className="arrow-right">▶️</div>
      </div>
    </div>
  );
};

export default DatePicker;

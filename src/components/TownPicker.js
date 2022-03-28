import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { userContext } from "../context/UserContext";

// import axios from "axios";
import "./Agenda.css";

const TownPicker = () => {
  const [place, setPlace] = useState("------ Selectionnez la ville");
  const [WelfareType, setWelfareType] = useState("------ Selectionnez l'aide souhaitée");
  const [day, setDay] = useState("Lundi");
  const [openingTime, setOpeningTime] = useState("9h");
  const [closingTime, setClosingTime] = useState("12h");
//   {day} de {opening_time} à {closing_time}
  return (
    <div className="select">
      {/* <p className="p__select">
        Sélectionnez la ville ou vous souhaitez prendre rendez-vous
      </p> */}

      <div className="div__select">
        <label htmlFor="town__select" className="town__select__label">
          Sélectionnez le lieu ou vous souhaitez prendre rendez-vous
        </label>
        <select
          onChange={(e) => setPlace(e.target.value)}
          className="town__select"
        >

          <option disabled defaultValue value="default">
            {place}
          </option>
          <option value="Nantes">Nantes Place Mendès France Antenne AXEL</option>
          <option value="Nantes">Nantes Chantenay EDS</option>
          <option value="Nantes">Nantes Michelet EDS</option>
          <option value="Nantes">Nantes Talensac EDS</option>
          <option value="Nantes">Saint-Mars-Du-Désert Mairie</option>
          <option value="Nantes">Nantes Breil -ATELIER PARTAGE</option>
          <option value="Nantes">Sucé-Sur-Erdre</option>
          <option value="Nantes">Nantes René Cassin EDS</option>
          <option value="Nantes">Nantes Vincent Gâche AGIRC ARRCO</option>
          <option value="Nantes">Nantes Dalby-Doulon-Malakoff EDS</option>
        </select>

        <p className="p__select">
          Ce lieu est ouvert les: {day} de {openingTime} à {closingTime}
        </p>

        <label htmlFor="welfare__select" className="connexionForm__label">
          Type de demande d'aide
        </label>

        <select
          onChange={(e) => setWelfareType(e.target.value)}
          className="welfare__select"
        >
          <option disabled defaultValue value="default"> {WelfareType} </option>
          <option value="welfare"> Assistance numériques de base </option>
          <option value="welfare"> Accès aux droits </option>
          <option selected value="welfare"> Comprendre notre monde connecté </option>

        </select>

        <label htmlFor="message" className="select_message__label">
          ( Veuillez cliquer sur un créneau pour réserver )
        </label>
      </div>
    </div>
  );
};

export default TownPicker;

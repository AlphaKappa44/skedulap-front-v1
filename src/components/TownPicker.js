import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { userContext } from "../context/UserContext";

// import axios from "axios";
import "./Agenda.css";
// <iframe src="https://data.loire-atlantique.fr/explore/embed/dataset/224400028_communes-loire-atlantique-denominations-formegeo-interco/table/?disjunctive.commune_nom&static=false&datasetcard=false" width="400" height="300" frameborder="0"></iframe>
const permURL = "http://localhost:8080/permanences";
const supportURL = "http://localhost:8080/supports";

const TownPicker = () => {
  const [place, setPlace] = useState("---Choisir la permanence");
  const [placeList, setPlaceList] = useState([]);

  const [support, setSupport] = useState("--choisir le support");
  const [supportList, setSupportList] = useState([]);

  const [day, setDay] = useState("Lundi");
  const [openingTime, setOpeningTime] = useState("9h");
  const [closingTime, setClosingTime] = useState("12h");

  React.useEffect(() => {
    axios.get(permURL).then((response) => {
      setPlaceList(response.data);
      console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(supportURL).then((response) => {
      setSupportList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="select">
      {/* <p className="p__select">
        Sélectionnez la ville ou vous souhaitez prendre rendez-vous
      </p> */}



      <div className="div__select">
        <label htmlFor="town__select" className="town__select__label">
          Sélectionnez le lieu ou vous souhaitez prendre rendez-vous
        </label>
        <select onChange={(e) => setPlace(e.target.value)} className="town__select">
         {
            placeList && placeList.map(place => (
                <option value= {place.permanence_name} key={place.id}>
                    {place.permanence_name}
                </option>
             ))
         }

        </select>

        <p className="p__select">
          Ce lieu est ouvert les: {day} de {openingTime} à {closingTime}
        </p>

        <label htmlFor="welfare__select" className="connexionForm__label">
          Type de demande d'aide
        </label>

        <select
          onChange={(e) => setSupport(e.target.value)}
          className="welfare__select"
        >
          <option defaultValue value="default">
            {" "}
            {support}{" "}
          </option>
          {
            supportList && supportList.map(support => (
                <option value= {support.type_support} key={support.id}>
                    {support.type_support}
                </option>
             ))
         }
          <option value="welfare"> Assistance numériques de base </option>
          <option value="welfare"> Accès aux droits </option>
          <option value="welfare"> Comprendre notre monde connecté </option>
        </select>

        <label htmlFor="message" className="select_message__label">
          ( Veuillez cliquer sur un créneau pour réserver )
        </label>
      </div>
    </div>
  );
};

export default TownPicker;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

// import axios from "axios";
import "./Agenda.css";
import DatePicker from "./DatePicker";
import TownPicker from "./TownPicker";

const Agenda = () => {
  const { user, setUser } = useContext(userContext);

  const [isLoading, setIsLoading] = useState(false);
  // const [isAuthentified, setIsAuthentified] = useState(false);

  const navigation = useNavigate(null);



  return (
    <div className="agenda">
      <h1 className="title__connexion">Prendre Rendez-vous</h1>

      <TownPicker></TownPicker>

      <DatePicker> </DatePicker>
 

          {!isLoading && (
            <button
              type="submit"
              value="submit"
              className="agenda__submit__button"
            >
              RESERVER
            </button>
          )}

          {/* Here we disable the button as the New User is being created, is loading is true */}
          {isLoading && <button disabled>ENVOI EN COURS ...</button>}
        {/* </form>
      </div> */}
    </div>
  );
};

export default Agenda;

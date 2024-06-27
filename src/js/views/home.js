import React, { useEffect, useContext } from "react";
import CardPeople from "../component/CardPeople";
import CardVehicle from "../component/CardVehicle";
import CardPlanet from "../component/CardPlanet";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPeople();
    actions.loadVehicles();
    actions.loadPlanets();
  }, [actions]);

  return (
    <div className="text-center mt-5">
      <div className="row">
        <h3>People</h3>
        {store.people.map((person, index) => (
          <CardPeople key={index} item={person} category="characters" />
        ))}
        <h3>Vehicles</h3>
        {store.vehicles.map((vehicle, index) => (
          <CardVehicle key={index} item={vehicle} category="vehicles" />
        ))}
        <h3>Planets</h3>
        {store.planets.map((planet, index) => (
          <CardPlanet key={index} item={planet} category="planets" />
        ))}
      </div>
    </div>
  );
};
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Spinner } from "react-bootstrap";
import "../../styles/demo.css";

export const Planet = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchPlanet(id);
      await actions.fetchPlanetDescription(id);
      setLoading(false);
    };
    fetchData();
  }, [actions, id]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!store.planet) {
    return (
      <Container className="text-center">
        <p>Planet data not available</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={store.planet.name}
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h1>{store.planet.name}</h1>
          <p>{store.description?.description || "No description available"}</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Diameter</th>
                <td>{store.planet.diameter}</td>
              </tr>
              <tr>
                <th>Rotation period</th>
                <td>{store.planet.rotation_period}</td>
              </tr>
              <tr>
                <th>Orbital period</th>
                <td>{store.planet.orbital_period}</td>
              </tr>
              <tr>
                <th>Gravity</th>
                <td>{store.planet.gravity}</td>
              </tr>
              <tr>
                <th>Population</th>
                <td>{store.planet.population}</td>
              </tr>
              <tr>
                <th>Climate</th>
                <td>{store.planet.climate}</td>
              </tr>
              <tr>
                <th>Terrain</th>
                <td>{store.planet.terrain}</td>
              </tr>
              <tr>
                <th>Surface water</th>
                <td>{store.planet.surface_water}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
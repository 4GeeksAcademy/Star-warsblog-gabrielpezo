import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Spinner } from "react-bootstrap";
import "../../styles/demo.css";

export const Vehicle = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchVehicle(id);
      await actions.fetchVehicleDescription(id);
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

  if (!store.vehicle) {
    return (
      <Container className="text-center">
        <p>Vehicle data not available</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
            alt={store.vehicle.name}
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h1>{store.vehicle.name}</h1>
          <p>{store.description.description}</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Model</th>
                <td>{store.vehicle.model}</td>
              </tr>
              <tr>
                <th>Class</th>
                <td>{store.vehicle.vehicle_class}</td>
              </tr>
              <tr>
                <th>Manufacturer</th>
                <td>{store.vehicle.manufacturer}</td>
              </tr>
              <tr>
                <th>Cost</th>
                <td>{store.vehicle.cost_in_credits}</td>
              </tr>
              <tr>
                <th>Length</th>
                <td>{store.vehicle.length}</td>
              </tr>
              <tr>
                <th>Crew</th>
                <td>{store.vehicle.crew}</td>
              </tr>
              <tr>
                <th>Passengers</th>
                <td>{store.vehicle.passengers}</td>
              </tr>
              <tr>
                <th>Max Speed</th>
                <td>{store.vehicle.max_atmosphering_speed}</td>
              </tr>
              <tr>
                <th>Cargo</th>
                <td>{store.vehicle.cargo_capacity}</td>
              </tr>
              <tr>
                <th>Consumables</th>
                <td>{store.vehicle.consumables}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
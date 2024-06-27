import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Spinner } from "react-bootstrap";
import "../../styles/demo.css";

export const People = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchPerson(id);
      await actions.fetchPersonDescription(id);
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

  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={store.person.name}
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <h1>{store.person.name}</h1>
          <p>{store.description.description}</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Height</th>
                <td>{store.person.height}</td>
              </tr>
              <tr>
                <th>Mass</th>
                <td>{store.person.mass}</td>
              </tr>
              <tr>
                <th>Hair Color</th>
                <td>{store.person.hair_color}</td>
              </tr>
              <tr>
                <th>Eye Color</th>
                <td>{store.person.eye_color}</td>
              </tr>
              <tr>
                <th>Skin Color</th>
                <td>{store.person.skin_color}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{store.person.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
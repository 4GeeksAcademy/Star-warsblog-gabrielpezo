import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" className="img-fluid navImage ps-5" alt="..." />
      </Link>
      <div className="ml-auto pe-5">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Favorites {store.favorites.length}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {store.favorites.length > 0 ? (
              store.favorites.map((item, index) => (
                <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                  {item.name}
                  <FontAwesomeIcon icon={faTrash} onClick={() => actions.removeFavorite(item)}/>
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item>No favorites added</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
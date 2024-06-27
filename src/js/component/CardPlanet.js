import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardPlanet = ({ item, category }) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some(fav => fav.uid === item.uid);
  
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${category}/${item.uid}.jpg`} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div className='d-flex justify-content-between align-items-center fs-2'>
          <Link to={`/demoPlanet/planets/${item.uid}`}>
            <Button variant="primary">Learn more!</Button>
          </Link>
          <FontAwesomeIcon
          icon={faHeart}
          className={`ml-2 ${isFavorite ? 'text-danger' : 'text-warning'}`}
          onClick={() => isFavorite ? actions.removeFavorite(item) : actions.addFavorite(item)}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPlanet;
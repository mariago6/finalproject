import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";

function RecipieDetailsCard({recipieimage, recipietitle, recipieingredients, recipieprocess}) {
  return(
    <div className="container">
      <div className="col-12">
      <Card>
      <Link to="/searchrecipes"><CloseButton /></Link>
      <Card.Img variant="top" src={recipieimage} />
      <Card.Body>
        <Card.Title>{recipietitle}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{recipieingredients}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          {recipieprocess}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

    </div>
  )
}

export default RecipieDetailsCard; 
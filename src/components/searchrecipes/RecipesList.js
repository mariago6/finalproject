import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function RecipesList({recipiestitle, recipiestext, recipieimage, id}) {
  return(
    <Card className="text-center">
      <Card.Img variant="top" src={recipieimage} />
      <Card.Header>{recipiestitle}</Card.Header>
      <Card.Body>
        <Card.Text>
          {recipiestext}
        </Card.Text>
        <Button variant="primary"><Link to={`/searchrecipes/${id}`} style={{ textDecoration: 'none', color: '#FFF' }}>See more</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default RecipesList; 
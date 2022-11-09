import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../../custom.scss';

function RecipesList({recipiestitle, recipieimage, id}) {
  return(
    <Card className="listCard text-center">
      <Link to={`/searchrecipes/${id}`}><Card.Img variant="top" src={recipieimage} /></Link>
      <Link to={`/searchrecipes/${id}`} style={{ textDecoration: 'none', color: '#000000' }}><Card.Header className="headerRecipes">{recipiestitle}</Card.Header></Link>
    </Card>
  )
}

export default RecipesList; 
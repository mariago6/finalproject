import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../../custom.scss';

function RecipesList({recipestitle, recipeimage, id}) {
  return(
    <Card className="listCard text-center">
      <Link to={`/searchrecipes/${id}`}><Card.Img variant="top" src={recipeimage} /></Link>
      <Link to={`/searchrecipes/${id}`} style={{ textDecoration: 'none', color: '#000000' }}><Card.Header className="headerRecipes">{recipestitle}</Card.Header></Link>
    </Card>
  )
}

export default RecipesList; 
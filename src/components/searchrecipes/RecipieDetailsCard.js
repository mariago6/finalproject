import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BsFillClockFill, BsPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import {MdEuroSymbol} from 'react-icons/md'

function RecipieDetailsCard({recipieimage, recipietitle, recipieingredients, recipieprocess, time, servings, numIngredients, price}) {
  return(
    <div className="container">
      <div className="col-12">
      <Card>
      <Link to="/searchrecipes"><CloseButton /></Link>
      <Card.Img variant="top" src={recipieimage} />
      <Card.Body>
        <Card.Title>{recipietitle}</Card.Title>
      </Card.Body>
      <ListGroup horizontal>
        <ListGroup.Item><BsFillClockFill /> {time}'</ListGroup.Item>
        <ListGroup.Item><BsPeopleFill /> {servings}</ListGroup.Item>
        <ListGroup.Item><GiFruitBowl/> {numIngredients}</ListGroup.Item>
        <ListGroup.Item><MdEuroSymbol/><BsFillPersonFill/> {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <Tabs
            defaultActiveKey="ingredients"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="ingredients" title="Ingredients"> {recipieingredients} </Tab>
            <Tab eventKey="instructions" title="Instructions">{recipieprocess}  </Tab>
          </Tabs>
          
          
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

    </div>
  )
}

export default RecipieDetailsCard; 
import React from "react";
import RecipeDetailsCard from "../components/searchrecipes/RecipeDetailsCard";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeStage from "../components/searchrecipes/RecipeStage";
import Steps from "../components/searchrecipes/Steps";
// import INFORMATION from "./INFORMATION";

// The api that we are using is free, but has limited calls. Therefore, I leave here a commented code to test the web in case the calls are finished. 
// In that case, we can take the details of an example recipe from INFORMATION.js field. 
// Also there are commented code in SearchRecipes.js too. 


function RecipeDetails() {
  const params = useParams(); 
  const INITIAL_API = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`; 

  const [steps, setSteps] = useState([]); 
  const [ingredients, setIngredients] = useState([]); 
  const [title, setTitle] = useState(''); 
  const [time, setTime] = useState(''); 
  const [servings, setServings] = useState(''); 
  const [image, setImage] = useState(''); 
  const [price, setPrice] = useState(''); 

  const callApi = (linkPage) => {
    fetch(linkPage)
      .then(res => res.json())
      .then((res) => {
        setSteps(res.analyzedInstructions);
        setIngredients(res.extendedIngredients);
        setTitle(res.title);
        setTime(res.readyInMinutes); 
        setServings(res.servings);
        setImage(res.image)
        setPrice((res.pricePerServing/10).toFixed(2))
      });
  }; 

  // const getInformation = (data) => {
  //   setSteps(data.analyzedInstructions);
  //   setIngredients(data.extendedIngredients);
  //   setTitle(data.title);
  //   setTime(data.readyInMinutes); 
  //   setServings(data.servings);
  //   setImage(data.image)
  //   setPrice((data.pricePerServing/10).toFixed(2))
  // }

  // useEffect(() => {getInformation(INFORMATION)}, []); 

  useEffect(() => {callApi(INITIAL_API)}, []);


  const printProcess = steps.map((step, index) => {
    return (
        <RecipeStage 
          key={index}
          steps={step.steps.map((s, index) => {
            return <div className="boxProcessContainer" key={index}><span className="stageTitle">{s.number}</span> {s.step}</div>
          })}
          numStage={index + 1}
          nameStage={step.name}
          />
    )
   })

   const printIngredients = ingredients.map((ingredient, index) => {
    return(
      <div className="boxIngredientsContainer">
        <Steps 
          key={index}
          stepText={ingredient.name}
        />
      </div>
    )
   })

  return(
    <div>
      <RecipeDetailsCard 
        recipeprocess={printProcess} 
        recipeingredients={printIngredients} 
        recipetitle={title} 
        time={time} 
        servings={servings} 
        recipeimage={image} 
        numIngredients={ingredients.length}
        price={price}
      />
    </div>
  )
}

export default RecipeDetails; 
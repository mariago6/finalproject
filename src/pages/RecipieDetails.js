import React from "react";
import RecipieDetailsCard from "../components/searchrecipes/RecipieDetailsCard";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeStage from "../components/searchrecipes/RecipeStage";
import Steps from "../components/searchrecipes/Steps";
import INFORMATION from "./INFORMATION";


function RecipieDetails() {
  const params = useParams(); 
  // const INITIAL_API = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`

  const [steps, setSteps] = useState([]); 
  const [ingredients, setIngredients] = useState([]); 
  const [title, setTitle] = useState(''); 
  const [time, setTime] = useState(''); 
  const [servings, setServings] = useState(''); 
  const [image, setImage] = useState(''); 
  const [price, setPrice] = useState(''); 

  // const callApi = (linkPage) => {
  //   fetch(linkPage)
  //     .then(res => res.json())
  //     .then((res) => {
  //       setSteps(res.analyzedInstructions);
  //       setIngredients(res.extendedIngredients);
  //       setTitle(res.title);
  //       setTime(res.readyInMinutes); 
  //       setServings(res.servings);
  //       setImage(res.image)
        // setPrice(res.pricePerServing)
  //     });
  // }; 

  const getInformation = (data) => {
    setSteps(data.analyzedInstructions);
    setIngredients(data.extendedIngredients);
    setTitle(data.title);
    setTime(data.readyInMinutes); 
    setServings(data.servings);
    setImage(data.image)
    setPrice((data.pricePerServing/10).toFixed(2))
  }

  useEffect(() => {getInformation(INFORMATION)}, []); 

  // useEffect(() => {callApi(INITIAL_API)}, []);


  const printProcess = steps.map((step, index) => {
    return (
        <div className="col-12 col-md-6 my-4">
          <RecipeStage 
            key={index}
            steps={step.steps.map((s, index) => {
              return <p key={index}>{s.number} {s.step}</p>
            })}
            numStage={index + 1}
            nameStage={step.name}
            />
        </div>
    )
   })

   const printIngredients = ingredients.map((ingredient, index) => {
    return(
      <div className="col-12 col-md-6 my-4">
        <Steps 
          key={index}
          stepText={ingredient.name}
        />
      </div>
    )
   })

  
  return(
    <div>
      <RecipieDetailsCard 
        recipieprocess={printProcess} 
        recipieingredients={printIngredients} 
        recipietitle={title} 
        time={time} 
        servings={servings} 
        recipieimage={image} 
        numIngredients={ingredients.length}
        price={price}
      />
    </div>
  )
}

export default RecipieDetails; 
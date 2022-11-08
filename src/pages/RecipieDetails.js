import React from "react";
import RecipieDetailsCard from "../components/searchrecipes/RecipieDetailsCard";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeStage from "../components/searchrecipes/RecipeStage";
import Steps from "../components/searchrecipes/Steps";

function RecipieDetails() {
  const params = useParams(); 
  const INITIAL_API = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`

  const [steps, setSteps] = useState([]); 
  const [ingredients, setIngredients] = useState([]); 
  const [title, setTitle] = useState(''); 
  const [time, setTime] = useState(''); 
  const [servings, setServings] = useState(''); 
  const [image, setImage] = useState(''); 

  const callApiInstructions = (linkPage) => {
    fetch(linkPage)
      .then(res => res.json())
      .then((res) => {
        setSteps(res.analyzedInstructions);
        setIngredients(res.extendedIngredients);
        setTitle(res.title);
        setTime(res.readyInMinutes); 
        setServings(res.servings);
        setImage(res.image)
      });
  }; 

  useEffect(() => {callApiInstructions(INITIAL_API)}, []);

  console.log(ingredients)
  console.log(steps)
  console.log(title)
  console.log(time)
  console.log(servings)
  console.log(image)


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
      <RecipieDetailsCard recipieprocess={printProcess} recipieingredients={printIngredients} />
    </div>
  )
}

export default RecipieDetails; 
import React, {useState, useEffect} from "react";
import '../custom.scss';
import RecipesList from "../components/searchrecipes/RecipesList";
import CheckboxFilter from "../components/searchrecipes/CheckboxFilter";
import SelectFilter from "../components/searchrecipes/SelectFilter";
import RangerFilter from "../components/searchrecipes/RangeFilter";
import Accordion from 'react-bootstrap/Accordion';

function SearchRecipes() {
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isKetogenic, setIsKetogenic] = useState(false); 
  const [diet, setDiet] = useState('');
  const [isGlutenFree, setIsGlutenFree] = useState(false); 
  const [isDairyFree, setIsDairyFree] = useState(false); 
  const [intolerances, setIntolerances] = useState('');
  const [selectIngredient, setSelectIngredient] = useState(''); 
  const [minRangerValue, setMinRangerValue] = useState(50);
  const [maxRangerValue, setMaxRangerValue] = useState(1500); 
  // const [minCalories, setMinCalories] = useState('');
  // const [maxCalories, setMaxCalories] = useState(''); 
  const [urlApi, setUrlApi] = useState(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`)
  
  // const INITIAL_API = `https://api.spoonacular.com/recipes/complexSearch?${diet}&apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`; 
  // const [recipes, setRecipes] = useState([]); 

  // const callApi = (linkPage) => {
  //   fetch(linkPage)
  //     .then(res => res.json())
  //     .then(res => {
  //       setRecipes(res.results);
        
  //     });
  // }; 

  function filterDiet() {
    let dietParam = '';

    if(isKetogenic && isVegetarian) {
      dietParam = 'ketogenic,vegetarian'
    } else if(isKetogenic) {
      dietParam = 'ketogenic'
    } else if(isVegetarian) {
      dietParam = 'vegetarian'
    } 
    setDiet(dietParam)
  }; 

  function filterIntolerances() {
    let intoleranceParam = ''; 
    if(isGlutenFree && isDairyFree) {
      intoleranceParam = 'gluten,dairy'
    } else if(isGlutenFree) {
      intoleranceParam ='gluten'; 
    } else if(isDairyFree) {
      intoleranceParam = 'dairy'; 
    } 
    setIntolerances(intoleranceParam)
  }

  
  useEffect(() => {
    filterDiet();
    filterIntolerances();  
    // callApi(INITIAL_API)
  }, [isVegetarian, isKetogenic, isGlutenFree, isDairyFree]);

  useEffect(() => {
    setUrlApi(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&intolerance=${intolerances}&minCalories=${minRangerValue}&maxCalories=${maxRangerValue}&includeIngredients=${selectIngredient}&apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`); 
    
  }, [diet, intolerances, minRangerValue, maxRangerValue, selectIngredient])

  useEffect(() => {
    console.log(urlApi)
  }, [urlApi])

  // const printRecipes = recipes.map((recipe, index) => {
  //   return (
  //       <div className="col-12 col-md-6 my-4">
  //         <RecipesList 
  //           key={index} 
  //           recipiestitle={recipe.title} 
  //           recipieimage={recipe.image} 
  //           id={recipe.id}
  //           // recipiestext={recipe.id} 
  //           linkroute={index} 
  //           />
  //       </div>
  //   )
  //  })

  const onInput = (e) => {
    setMinRangerValue(e.minValue)
    setMaxRangerValue(e.maxValue)
  }

  return(
    <div className="container">
      <div className="recipesTitle">
        <h2>Recipies & Cooking Ideas</h2>
      </div>
      <div className="row">
      <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Filters</Accordion.Header>
      <Accordion.Body>
          <CheckboxFilter id='vegetrian' label='Vegetarian' onChange={(e) => setIsVegetarian(e.target.checked)}/>
          <CheckboxFilter id='ketogenic' label='Ketogenic' onChange={(e) => setIsKetogenic(e.target.checked)}/>
          <CheckboxFilter id='glutenfree' label='Gluten free' onChange={(e) => setIsGlutenFree(e.target.checked)}/>
          <CheckboxFilter id='dairyfree' label='Dairy free' onChange={(e) => setIsDairyFree(e.target.checked)}/>
          <SelectFilter onChange={(e) => setSelectIngredient(e.target.value)}/>
          <div className="rangerfilter">
            <RangerFilter 
              value1={minRangerValue} 
              value2={maxRangerValue} 
              onInput={onInput}
            />
            <div className="d-flex">
              <p className="mx-2"><small>Minimum: <strong>{minRangerValue}KCal </strong></small></p>
              <p className="mx-2"><small>Maximum: <strong>{maxRangerValue}KCal</strong></small></p>
            </div>
          </div>
        
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Chicken with chillies" 
            recipieimage="./images/chilly.jpg" 
            linkroute="1" />
        </div>
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Pasta with pesto" 
            recipieimage="./images/pasta.jpg" 
            /> 
        </div>
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Pasta with pesto" 
            recipieimage="./images/pasta.jpg" 
            /> 
        </div>
        {/* {printRecipes}  */}
      </div>
      
    </div>
  )
}

export default SearchRecipes; 
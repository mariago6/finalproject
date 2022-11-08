import React, {useState, useEffect} from "react";
import '../custom.scss';
import RecipesList from "../components/searchrecipes/RecipesList";
import CheckboxFilter from "../components/searchrecipes/CheckboxFilter";
import SelectFilter from "../components/searchrecipes/SelectFilter";
import RangerFilter from "../components/searchrecipes/RangeFilter";
import Accordion from 'react-bootstrap/Accordion';

function SearchRecipes() {
  const [isVegan, setIsVegan] = useState(false); 
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [diet, setDiet] = useState('');
  const [isGlutenFree, setIsGlutenFree] = useState(false); 
  const [isDairyFree, setIsDairyFree] = useState(false); 
  const [isKetogenic, setIsKetogenic] = useState(false); 
  const [selectIngredient, setSelectIngredient] = useState(''); 
  const [minRangerValue, setMinRangerValue] = useState(50);
  const [maxRangerValue, setMaxRangerValue] = useState(800); 
  
  const INITIAL_API = `https://api.spoonacular.com/recipes/complexSearch?${diet}&apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc`; 
  const [recipes, setRecipes] = useState([]); 

  const callApi = (linkPage) => {
    fetch(linkPage)
      .then(res => res.json())
      .then(res => {
        setRecipes(res.results);
        
      });
  }; 

  function filterDiet() {
    if(isVegan && isVegetarian) {
      setDiet('diet=vegan,vegetarian')
    } else if(isVegan) {
      setDiet('diet=vegan')
    } else if(isVegetarian) {
      setDiet('diet=vegetarian')
    }
  }

  useEffect(() => {
    filterDiet()
    callApi(INITIAL_API)
  }, [isVegan, isVegetarian]);

  const printRecipes = recipes.map((recipe, index) => {
    return (
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            key={index} 
            recipiestitle={recipe.title} 
            recipieimage={recipe.image} 
            id={recipe.id}
            // recipiestext={recipe.id} 
            linkroute={index} 
            />
        </div>
    )
   })

  const onInput = (e) => {
    setMinRangerValue(e.minValue)
    setMaxRangerValue(e.maxValue)
  }

  return(
    <div className="container">
      <h2>Recipies</h2>
      
      <div className="row">
      <Accordion>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Filters</Accordion.Header>
      <Accordion.Body>
        
          <CheckboxFilter id='vegan' label='Vegan' onChange={(e) => setIsVegan(e.target.checked)}/>
          <CheckboxFilter id='vegetrian' label='Vegetarian' onChange={(e) => setIsVegetarian(e.target.checked)}/>
          <CheckboxFilter id='glutenfree' label='Gluten free' onChange={(e) => setIsGlutenFree(e.target.checked)}/>
          <CheckboxFilter id='dairyfree' label='Dairy free' onChange={(e) => setIsDairyFree(e.target.checked)}/>
          <CheckboxFilter id='ketogenic' label='Ketogenic' onChange={(e) => setIsKetogenic(e.target.checked)}/>
          <SelectFilter />
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
        {/* <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Chicken with chillies" 
            recipieimage="./images/chilly.jpg" 
            recipiestext="dfmgsdlfkmsldkfgmsdlkgksdgklsdgl" 
            linkroute="1" />
        </div>
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Pasta with pesto" 
            recipieimage="./images/pasta.jpg" 
            recipiestext="fmgsdlfkmsldkfgmsdlkgksdgklsdgl"
            /> 
        </div>
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Pasta with pesto" 
            recipieimage="./images/pasta.jpg" 
            /> 
        </div> */}
        {printRecipes} 
      </div>
      
    </div>
  )
}

export default SearchRecipes; 
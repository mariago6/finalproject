import React, {useState, useEffect} from "react";
import '../custom.scss';
import RecipesList from "../components/searchrecipes/RecipesList";
import Card from 'react-bootstrap/Card';
import CheckboxFilter from "../components/searchrecipes/CheckboxFilter";
import SelectFilter from "../components/searchrecipes/SelectFilter";
import RangerFilter from "../components/searchrecipes/RangeFilter";

function SearchRecipes() {
  const [isVegan, setIsVegan] = useState(false); 
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false); 
  const [isDairyFree, setIsDairyFree] = useState(false); 
  const [isKetogenic, setIsKetogenic] = useState(false); 
  const [selectIngredient, setSelectIngredient] = useState(''); 
  const [minRangerValue, setMinRangerValue] = useState(50);
  const [maxRangerValue, setMaxRangerValue] = useState(800); 
  
  // const INITIAL_API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2f0e9e3a78d041a393aa31a8ac79bdfc'; 
  // const [recipes, setRecipes] = useState([]); 

  // const callApi = (linkPage) => {
  //   fetch(linkPage)
  //     .then(res => res.json())
  //     .then(res => {
  //       setRecipes(res.results);
        
  //     });
  // }; 

  // useEffect(() => {callApi(INITIAL_API)}, []);

  // const printRecipes = recipes.map((recipe, index) => {
  //   return (
  //       <div className="col-12 col-md-6 my-4">
  //         <RecipesList 
  //           key={index} 
  //           recipiestitle={recipe.title} 
  //           recipieimage={recipe.image} 
  //           recipiestext={recipe.id} 
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
      <h2>Recipies</h2>
      <div className="row">
        <Card>
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
              <p className="mx-2"><small>Minimum: {minRangerValue}KCal </small></p>
              <p className="mx-2"><small>Maximum: {maxRangerValue}KCal</small></p>
            </div>
          </div>
        </Card>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 my-4">
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
            recipiestext="dfmgsdl fkms ld kfgm sdlk gks dg kls dgldf dlksmd sdfñsdl dñsfm sdfñdfs sñdñfls dñfsdlks dñfds,lf sdñfñ sdfñdsl,fd ñsdfl sñdfls  sñd dfkfdk ddmdm fkfjs dksd sksdms dksmd f skdm dkfdmfndfv ksmd fksdmf skd f skdf ffkfmdflc sldfmsdmfd fks fm"
            /> 
        </div>
        <div className="col-12 col-md-6 my-4">
          <RecipesList 
            recipiestitle="Pasta with pesto" 
            recipieimage="./images/pasta.jpg" 
            /> 
        </div>
      </div>
      {/* {printRecipes}  */}
    </div>
  )
}

export default SearchRecipes; 
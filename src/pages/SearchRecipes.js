import React, {useState, useEffect} from "react";
import '../custom.scss';
import RecipesList from "../components/searchrecipes/RecipesList";

function SearchRecipes() {
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

  return(
    <div className="container">
      <h2>Recipies</h2>
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
      {/* <div className="row">
        <div className="col-6"><RecipesList recipiestitle="Chicken with chillies" recipieimage="./images/chilly.jpg"/></div>
        <div className="col-6"><RecipesList recipiestitle="Pasta with pesto" recipieimage="./images/pasta.jpg" /> </div>
         {printRecipes} 
      </div> */}
    </div>
  )
}

export default SearchRecipes; 
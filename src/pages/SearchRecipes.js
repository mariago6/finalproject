import React from "react";
import '../custom.scss';
import RecipesList from "../components/RecipesList";

function SearchRecipes() {
  return(
    <div className="container">
      <h2>Recipies</h2>
      <div className="row">
        <div className="col-6"><RecipesList recipiestitle="Chicken with chillies" recipieimage="./images/chilly.jpg" recipiestext="dfmgsdlfkmsldkfgmsdlkgksdgklsdgl" linkroute="1" /></div>
        <div className="col-6"><RecipesList recipiestitle="Pasta with pesto" recipieimage="./images/pasta.jpg" /> </div>
      </div>
      <div className="row">
        <div className="col-6"><RecipesList recipiestitle="Chicken with chillies" recipieimage="./images/chilly.jpg"/></div>
        <div className="col-6"><RecipesList recipiestitle="Pasta with pesto" recipieimage="./images/pasta.jpg" /> </div>
      </div>
    </div>
  )
}

export default SearchRecipes; 
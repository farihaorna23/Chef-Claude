import {getRecipeFromMistral} from "../ai.js"
import {useState} from "react"
import Recipe from "./Recipe"

const GetRecipe = (props) => {

  let [recipe, setRecipe] = useState("")

  const getRecipe = async() => {
    //will return recipe as markdown
    const markdownRecipe = await getRecipeFromMistral(props.ingredientList)
    setRecipe(markdownRecipe)
  }

  return(
  <>
  {
    props.total >= 4 ? (
    <div className="get-recipe-container">
        <div className="get-recipe-text">
          <span>Ready for a recipe?</span>
          <p>Generate a recipe from your list of ingredients.</p>
    </div>
    <button className="generateBtn" onClick={getRecipe}>Get a recipe</button>
    </div>
    ) : null
   }
   {recipe && <Recipe recipe={recipe}/>}
</>
  )
}

export default GetRecipe


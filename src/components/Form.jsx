import { useState } from "react";
import List from "./List";

const Form = () => {

  let [ingredient, setIngredient] = useState("");
  let [ingredientList, setIngredientList] = useState([])

  let getIngredient = (e) => {
    setIngredient(e.target.value)
  }

  let addIngredient = () => {
    if(ingredient.trim() != ""){
      setIngredientList (prevList => [...prevList,ingredient])
      setIngredient("")
    }
  }

  return (
    <>
    <div className="form-container">
    <form>
      <label>
        <input placeholder="e.g onion" 
        className="form-input" 
        name="ingredient" 
        value={ingredient}
        onChange={getIngredient}></input>
      </label>
    </form>
    <div className="add-btn"
    onClick={addIngredient}>
    + Add ingredient
    </div>
    </div>
    <List ingredientList = {ingredientList}/>
    </>
  )
}

export default Form;
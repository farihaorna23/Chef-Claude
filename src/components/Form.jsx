import { useState } from "react";
import List from "./List";

const Form = () => {
  let [ingredientList, setIngredientList] = useState([])

  const addItemHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const new_ingredient = formData.get("ingredient")
    if (new_ingredient) {
      setIngredientList((prevList) => [...prevList, new_ingredient]);
      e.target.reset();
    }
  }

  return (
    <>
    <div className="form-container">
    <form onSubmit={addItemHandler}>
      <label>
        <input placeholder="e.g onion" 
        className="form-input" 
        name="ingredient" 
        ></input>
      </label>
      <button className="add-btn" type="submit">+ Add ingredient</button>
    </form>
    </div>
    <List ingredientList = {ingredientList}/>
    </>
  )
}

export default Form;
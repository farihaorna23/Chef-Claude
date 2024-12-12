const List = (props) => {
  return (
    <>
    {
    props.ingredientList.length > 0  && 
    <section>
    <div className="ingredient-list-container">
    <span className="list-title">Ingredients on hand:</span>
    <ul>
    {props.ingredientList.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
    })}
    </ul>
    </div> 
    <div className="get-recipe-container">
    <div className="get-recipe-text">
      <span>Ready for a recipe?</span>
      <p>Generate a recipe from your list of ingredients.</p>
    </div>
    <button className="generateBtn">Get a recipe</button>
    </div>
  </section>  
  }
  </>
  )
}

export default List;



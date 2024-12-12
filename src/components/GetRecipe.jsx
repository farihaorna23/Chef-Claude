const GetRecipe = (props) => {
  return(
  <>
  {
    props.total >= 4 ? (
    <div className="get-recipe-container">
        <div className="get-recipe-text">
          <span>Ready for a recipe?</span>
          <p>Generate a recipe from your list of ingredients.</p>
    </div>
    <button className="generateBtn">Get a recipe</button>
    </div>
    ) : null
   }
</>
  )
}

export default GetRecipe


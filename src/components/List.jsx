import GetRecipe from "./GetRecipe"
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
  </section>  
  }
  <section>
  <GetRecipe total={props.ingredientList.length} ingredientList={props.ingredientList}/>
  </section>
  </>
  )
}

export default List;



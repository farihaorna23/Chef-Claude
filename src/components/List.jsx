const List = (props) => {
  return (
    <>
    {
    props.ingredientList.length > 0 ? (
    <div className="ingredient-list-container">
    <span className="list-title">Ingredients on hand:</span>
    <ul>
    {props.ingredientList.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
    })}
    </ul>
    </div> ): ("")
  }
  </>
  )
}

export default List;



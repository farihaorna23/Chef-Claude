const List = (props) => {
  return (
    <div class="ingredient-list-container">
    <span className="list-title">Ingredients on hand:</span>
    <ul>
    {props.ingredientList ? props.ingredientList.map((ingredient) => {
      return <li key={ingredient}>{ingredient}</li>
    }) : ""}
  </ul>
  </div>
  )
}

export default List;
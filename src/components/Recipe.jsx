import React from 'react'
//importing markdown package which is a react component that can convert a string on markdown into react elements and render it
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Recipe = (props) => {
  return(
    <section className="recipe-container">
      <h1>Recipe Here:</h1>
       <ReactMarkdown children={props.recipe} remarkPlugins={[remarkGfm]}></ReactMarkdown>
    </section>
  )
}

export default Recipe;
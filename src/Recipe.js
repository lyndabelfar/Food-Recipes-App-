import React from 'react'

function Recipe({recipe}) {
  return (
    <div className='recipe'>
        <h1>{recipe.recipe.label}</h1>
        <p> <span>Cuisine Type:</span> {recipe.recipe.cuisineType}</p>
        <p> <span> Dish Type: </span>{recipe.recipe.dishType}</p>

        <p className='calories'> <span>Calories: </span> {recipe.recipe.calories} calory</p>

        <span>Ingredients: </span>

        {recipe.recipe.ingredientLines.map((ingredientLine)=>{
            return <p className='ingredient'>{ingredientLine}</p>
        })}

        <p className='source'><span>Source: </span>  {recipe.recipe.source} </p>

        <img src={recipe.recipe.image}/>

    </div>
  )
}

export default Recipe
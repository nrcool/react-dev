import React from 'react'

export default function Recipe(props) {
    console.log(props)
      //if you are using find ,it will return an exact object
  /*   let recipe= props.data.find(item=>item.recipe.label===props.match.params.productname) */
   /*  {} */
  /*   //if you are using filter ,it will return an array
    let recipe = props.data.filter(item=>item.recipe.label===props.match.params.productname) */
    /* [{}] */

  /*   console.log(recipe) */
  let item=props.location.state.recipe

  
    return (
        <div>
            <h1>{item.label}</h1>
            <img src={item.image}/>

        </div>
    )
}

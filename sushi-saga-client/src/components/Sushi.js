import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props)
  return (
    <div className="sushi">
      <Fragment />
      <div className="plate"
           onClick={() => console.log("changeEatenStatus invoked", props.sushiKey)}>
        {
          props.hasBeenEaten ===
          true ?
            null
          :
            <img src={props.sushiUrl} width="100%" alt="sushi" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiName} - ${props.sushiPrice}
      </h4>
    </div>
  )
}

export default Sushi

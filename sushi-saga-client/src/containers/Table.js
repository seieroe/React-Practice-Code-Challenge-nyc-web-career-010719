import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${100} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            //map through renderedSushis
            // if hasBeenEaten eaten status is true, add it to the eatenSushis array
            //render a plate for each eaten sushi in eatenSushis array

            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table

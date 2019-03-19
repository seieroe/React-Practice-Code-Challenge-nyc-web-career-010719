import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //
  // changeEatenStatus = (id) => {
  //   console.log("change eaten status", id)
  //   hasBeenEaten => this.setState(true)
  // }

  console.log("SushiContainer props", props)

  // {React.Children.map(a, i => <li>{i}</li>)}
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi =>
          <Sushi
            key={sushi.id}
            sushiKey={sushi.id}
            sushiId={sushi.id}
            sushiName={sushi.name}
            sushiUrl={sushi.img_url}
            sushiPrice={sushi.price}
            // changeEatenStatus={changeEatenStatus}
          />
        )}
        <MoreButton />
      </div>
    </Fragment>
  )

}

export default SushiContainer




/****************
possible ways to limit to four sushi on the page, found online
*****************/


// {a.map(i => {
  //   return <li>{i}</li>
  // })}

  // describe('ListOfNumbers', () => {
    //   it('renders an item for each provided number', () => {
      //     const listOfNumbers = shallowRender(<ListOfNumbers className="red" numbers={[3, 4, 5, 6]}/>);
      //     expect(listOfNumbers.props.children.length).toEqual(4);
      //   });
      // });

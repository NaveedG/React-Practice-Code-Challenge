import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi =>
        < Sushi sushi={sushi} eaten={props.eaten} eatSushi={props.eatSushi}/>
        )}
        <MoreButton addMore={props.addMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
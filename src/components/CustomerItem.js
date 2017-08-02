import React from 'react';

const CustomerItem = (props) => {
  return (
  <div className="thumbnail paddingtop10" >
    {props.bets.map(item =>

      <div className="caption">
        <h3>{item.RaceName} - {item.ReturnStake} - {item.Won ? "Win" : "Lose"}</h3>
      </div>
    )}
  </div>
)
}

export default CustomerItem

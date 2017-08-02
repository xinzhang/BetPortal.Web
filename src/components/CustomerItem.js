import React from 'react';

const CustomerItem = (props) => {
  return (
  <div className="paddingtop10" >
    {props.bets.map(item =>
      <div className="caption">
        {item.ReturnStake > 200 && item.Won &&
          <b><p>{item.RaceName} - {item.ReturnStake} - {item.Won ? "Win" : "Lose"}</p></b>
        }
        { (item.ReturnStake< 200 || !item.Won) &&
          <p>{item.RaceName} - {item.ReturnStake} - {item.Won ? "Win" : "Lose"}</p>
        }        
      </div>
    )}
  </div>
)
}

export default CustomerItem

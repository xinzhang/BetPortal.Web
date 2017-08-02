import React, {Component} from 'react'
import CustomerItem from './CustomerItem'

class CustomerList extends Component {

  render() {
    return (
      <div className="row">
        {this.props.customers.map(item =>
          <div key={item._id} className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <div className="thumbnail thumbnail-size">
              <p>Customer Name: {item.Customer}</p>
              <p>Total Stake: {item.TotalStake}</p>
              <CustomerItem bets={item.Bets} key={item._id} />
            </div>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

export default CustomerList

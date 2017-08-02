import React, {Component} from 'react'
import CustomerItem from './CustomerItem'

class CustomerList extends Component {

  render() {
    return (
      <div className="row">
        {this.props.customers.map(item =>
          <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            CustomerName: {item.Customer}, Total Stake {item.TotalStake}
            <CustomerItem bets={item.Bets} key={item._id} />
          </div>
        )}
      </div>
    )
  }
}

export default CustomerList

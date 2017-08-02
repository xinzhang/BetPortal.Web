import React from 'react';
import PropTypes from 'prop-types';

import {getAllCustomers} from '../api/customerApi';

import CustomersList from '../components/CustomerList';

export default class CustomerPage extends React.Component {

    constructor(props){
      super(props);
    }

    componentDidMount() {
      getAllCustomers().then(data => {
        this.setState({
          customers : data
        });
      });
    }

    render() {
      return (
        <div className="container">
          <div className="row">              
              <label className="paddingtop10">Total Customers {this.state.customers.length}</label>
          </div>
          <div classnName="row">
              <hr />
          </div>
          <div className="row">
            <div>
              <CustomersList customers={this.state.customers} />
            </div>
          </div>
      </div>
      );
    }
}

CustomerPage.propTypes = {
  customers: PropTypes.array.isRequired
}

jest.dontMock('../CustomerPage.js');
jest.dontMock('../../api/customerApi');

import React from 'react';
import {shallow} from 'enzyme';
import CustomerPage from '../CustomerPage';

describe("the customer container component", function() {
  it("the component rendered correctly", function() {

    const customers = [{Customer:'john'},{Customer:'smith'}]

    var customerPage = shallow(
      <CustomerPage  />
    )

    //api is in componentDidMount, it will not be called by shallow render
    const a = customerPage.find('.paddingtop10').text();
    expect(a).toEqual("Total Customers 0");
  })

})

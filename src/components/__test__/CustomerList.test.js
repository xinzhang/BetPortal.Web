jest.dontMock('../CustomerList.js');

import React from 'react';
import {shallow} from 'enzyme';
import CustomersList from '../CustomerList';

describe("the customer list component", function() {
  it("the component rendered correctly", function() {

    const customers = [{Customer:'john'},{Customer:'smith'}]

    var customersList = shallow(
      <CustomersList customers={customers} />
    )

    const a = customersList.find('.thumbnail').length;
    expect(a).toEqual(2);
  })

})

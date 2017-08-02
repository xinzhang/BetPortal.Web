jest.dontMock('../CustomerItem.js');

import React from 'react';
import {shallow} from 'enzyme';
import CustomerItem from '../CustomerItem';

describe("the customer item component", function() {
  it("the component rendered correctly", function() {

    const bets = [{"RaceId":1,"CustomerId":1,"CustomerName":"Rob","ReturnStake":100.0,"Won":true,"RaceName":"R1","RaceStart":"2017-08-02T12:00:00+10:00"},{"RaceId":2,"CustomerId":1,"CustomerName":"Rob","ReturnStake":150.0,"Won":false,"RaceName":"R2","RaceStart":"2017-08-02T13:00:00+10:00"},{"RaceId":3,"CustomerId":1,"CustomerName":"Rob","ReturnStake":200.0,"Won":false,"RaceName":"R3","RaceStart":"2017-08-02T14:00:00+10:00"}]

    var customerItem = shallow(
      <CustomerItem bets={bets} />
    )

    const a = customerItem.find('.caption').length;
    expect(a).toEqual(3);
  })

})

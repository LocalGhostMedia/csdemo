import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Reservations from './components/Reservations';


describe(Reservations, () => {
    const reservations = [
        {"campsiteId": 1, "startDate": "2016-06-01", "endDate": "2016-06-04"},
        {"campsiteId": 1, "startDate": "2016-06-11", "endDate": "2016-06-14"},
        {"campsiteId": 1, "startDate": "2016-06-7", "endDate": "2016-06-10", "searchQuery": true},
    ]
    let component = shallow(
        <Reservations
            dateFormat='MMM Do'
            reservations={reservations}
            />
    );

    it('asserts one search reservation exists per campsite', () => {
        const campsiteReservations = component.instance().props.reservations;
        const searchReservation = campsiteReservations.filter(res => res.searchQuery);
        expect(searchReservation.length).toBe(1);
    });

    it('asserts that dateFormat is passed and a string', () => {
        const dateFormat = component.instance().props.dateFormat;
        expect(dateFormat).toBeTruthy();
    });
});

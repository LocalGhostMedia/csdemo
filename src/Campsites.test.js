import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Campsites from './components/Campsites';


describe(Campsites, () => {

    const sampleCampSiteData = {
        "search": {
                "startDate": "2016-06-07",
                "endDate": "2016-06-10"
        },
        "campsites": [
            {
                "id": 1,
                "name": "Grizzly Adams Adventure Cabin"
            },
            {
                "id": 2,
                "name": "Lewis and Clark Camp Spot"
            },
        ],
        "gapRules": [
            {
                "gapSize": 2
            }
        ],
          "reservations": [
            {"campsiteId": 1, "startDate": "2016-06-01", "endDate": "2016-06-04"},
            {"campsiteId": 1, "startDate": "2016-06-08", "endDate": "2016-06-09"},
          ]
      };

    let component = shallow(
        <Campsites
            campsites={sampleCampSiteData.campsites}
            gapRules={sampleCampSiteData.gapRules}
            reservations={sampleCampSiteData.reservations}
            search={sampleCampSiteData.search}
            dateFormat='MMM Do'
            />
    );

    it('removes invalid camp reservations from valid reservations', () => {
        const campsiteReservations = component.instance().props.reservations;
        const validReservations = component.instance().findReservationConflicts(campsiteReservations);
        component.update();
        expect(validReservations.length).toBeLessThan(campsiteReservations.length);
    });

    it('determines all reservations as valid', () => {
        let updatedReservations = [
            {"campsiteId": 1, "startDate": "2016-06-01", "endDate": "2016-06-04"},
            {"campsiteId": 1, "startDate": "2016-06-11", "endDate": "2016-06-14"}
        ]
        let component = shallow(
            <Campsites
                campsites={sampleCampSiteData.campsites}
                gapRules={sampleCampSiteData.gapRules}
                reservations={updatedReservations}
                search={sampleCampSiteData.search}
                />
        );
        const campsiteReservations = component.instance().props.reservations;
        const validReservations = component.instance().findReservationConflicts(campsiteReservations);
        component.update();
        expect(validReservations.length).toBe(campsiteReservations.length);
    });

    it('asserts that dateFormat is passed and a string', () => {
        const dateFormat = component.instance().props.dateFormat;
        expect(typeof dateFormat).toBe('string');
    });


});

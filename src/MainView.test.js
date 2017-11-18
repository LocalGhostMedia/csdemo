import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import MainView from './components/MainView';


describe(MainView, () => {

    it('renders and matches snapshot', () => {
        const component = renderer.create( <MainView/> );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});

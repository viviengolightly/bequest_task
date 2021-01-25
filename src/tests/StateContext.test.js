import React, { useContext } from 'react';
import StateContextProvider  from '../contexts/StateContex';
import { StateContext } from '../contexts/StateContex';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("State context", () => {
    it("toggle state checked when clicked", () => {
        const TestComponent = () => {
            const { checked, dispatch } = useContext(StateContext);
            return(
                <div>
                    <div data-testid="value">{checked.toString()}</div>
                    <button onClick={() => dispatch({type: 'TOGGLE_CHECKED',checked})}>Toggle</button>
                </div>
            );
        };

        const wrapper = mount(
            <StateContextProvider>
                <TestComponent />
            </StateContextProvider>
        );

        expect(wrapper.find('[data-testid="value"]').text()).toEqual('false');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual('true');
    });
});
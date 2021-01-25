import React, { useContext } from 'react';
import AddressContextProvider from '../contexts/AddressContext';
import { AddressContext } from '../contexts/AddressContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("Address context", () => {
    it("adds or remove address when button clicked", () => {
        const TestComponent = () => {
            let id = '123'
            const { addresses, dispatch } = useContext(AddressContext);
            const testAdd = () => {
                dispatch({
                    type: 'ADD_ADDRESS',
                    address: {
                        id: id,
                        lineOne: 'test 1', 
                        lineTwo: 'test 2', 
                        lineThree: 'test 3', 
                        postcode: 'test 4', 
                        town: 'test 5', 
                        country: 'test 6'
                    }
                });
            }

            const testClear = () => {
                dispatch({ type: 'CLEAR_ADDRESSES'})
            }
            return(
                <div>
                    <div data-testid="listLength">{addresses.length.toString()}</div>
                    <button data-testid="addBtn" onClick={testAdd}>Add</button>
                    <button data-testid="removeBtn" onClick={testClear}>Remove</button>
                </div>
            );
        };

        const wrapper = mount(
            <AddressContextProvider>
                <TestComponent />
            </AddressContextProvider>
        );

        expect(wrapper.find('[data-testid="listLength"]').text()).toEqual('0');
        wrapper.find('[data-testid="addBtn"]').simulate('click');
        expect(wrapper.find('[data-testid="listLength"]').text()).toEqual('1');
        wrapper.find('[data-testid="removeBtn"]').simulate('click');
        expect(wrapper.find('[data-testid="listLength"]').text()).toEqual('0');
    });
});
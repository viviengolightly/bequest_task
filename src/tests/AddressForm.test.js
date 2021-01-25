import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import AddressForm from '../components/AddressForm';

// Contexts
import AddressContextProvider from '../contexts/AddressContext';
import  StateContextProvider  from '../contexts/StateContex';

Enzyme.configure({ adapter: new Adapter() });

describe('AddressForm Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <AddressContextProvider>
          <StateContextProvider>
            <AddressForm />
          </StateContextProvider>
        </AddressContextProvider>
      );
    })
  
    it('component should render without error', () => {
      expect(wrapper.exists()).toBe(true);
    })
   
  });
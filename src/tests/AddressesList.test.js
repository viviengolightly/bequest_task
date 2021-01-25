import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import AddressesList from '../components/AddressesList';

// Contexts
import AddressContextProvider from '../contexts/AddressContext';


Enzyme.configure({ adapter: new Adapter() });

describe('AddressesList Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <AddressContextProvider>
          <AddressesList />
        </AddressContextProvider>
      );
    })
  
    it('component should render without error', () => {
      expect(wrapper.exists()).toBe(true);
    })
   
  });
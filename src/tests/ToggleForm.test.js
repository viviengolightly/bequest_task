import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import ToggleForm from '../components/ToggleForm';

// Contexts
import  StateContextProvider  from '../contexts/StateContex';

Enzyme.configure({ adapter: new Adapter() });

describe('ToggleForm Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <StateContextProvider>
          <ToggleForm />
        </StateContextProvider>
      );
    })
  
    it('component should render without error', () => {
      expect(wrapper.exists()).toBe(true);
    })
   
});
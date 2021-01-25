import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import AddressDetails from '../components/AddressDetails';

// Utils
import { findByTestAttr } from '../Utils/index';


Enzyme.configure({ adapter: new Adapter() });

describe('AddressDetails Component', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      wrapper = shallow(<AddressDetails 
        lineOne={'Test line one'}
        lineTwo={'Test line two'}
        lineThree={'Test line three'}
        postcode={'Test postcode'}
        town={'Test town'}
        country={'Test country'}
        dispatch={mockFunc}
      />);
    })
  
    it('component should render without error', () => {
      expect(wrapper.exists()).toBe(true);
    })
  
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'lineOne');
      expect(component.text()).toBe('Test line one');
    })
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'lineTwo');
      expect(component.text()).toBe('Test line two');
    })
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'lineThree');
      expect(component.text()).toBe('Test line three');
    })
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'postcode');
      expect(component.text()).toBe('Test postcode');
    })
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'town');
      expect(component.text()).toBe('Test town');
    })
    it('first line should contain text', () => {
      const component =  findByTestAttr(wrapper, 'country');
      expect(component.text()).toBe('Test country');
    })
  });
  
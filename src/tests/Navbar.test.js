import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import Navbar from '../components/Navbar';

// Utils
import { findByTestAttr } from '../Utils/index';


Enzyme.configure({ adapter: new Adapter() });

describe('Navbar Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar header={'TEST BOOK'} />);
  })

  it('component should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should contain text', () => {
    const component =  findByTestAttr(wrapper, 'h1');
    expect(component.text()).toBe('TEST BOOK');
  })
});
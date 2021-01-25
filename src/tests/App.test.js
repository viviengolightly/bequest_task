import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('component should render without error', () => {
    expect(wrapper.exists()).toBe(true);
  })
  it('should render 4 children', () => {
    expect(wrapper.children().children().children().length).toBe(4);
  })
});
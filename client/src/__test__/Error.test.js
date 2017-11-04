import React from 'react';
import { mount, shallow } from 'enzyme';
import Error from '../components/Main/LoginPage/Error';
describe('Test Error Component', () => {
  it('renders without crashing', () => {
    shallow(<Error error="test error"/>)
  });
  it('renders without crashing', () => {
    const enzymeWrapper = mount(<Error className="" error="Auth Error" />);
    expect(enzymeWrapper.find('div').text()).toBe('Auth Error');
  });
})



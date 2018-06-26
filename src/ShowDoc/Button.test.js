import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Button from './index';



it('button componet', () => {
  it('renders as a <button>.', () => {
  const wrapper = shallow(<Button onclick="234455" />);
  expect(wrapper.is('button')).toEqual(true);
  });
});

//  it('renders div element', () => {
//   const wrapper = shallow(<Button text='123345' />);
//   expect(wrapper.find('div').exists()).toEqual(false);
// })

// it('renders button with class', () => {
//   const wrapper = shallow(<Button buttonClass="testClass" onclick="2344555" />);
//   expect(wrapper.hasClass("testClass")).toEqual(false);
// })

it('renders button with click handler attached', () => {
  let testPass = false;
  const clickHandler = () => {
    testPass = true;
  }
})
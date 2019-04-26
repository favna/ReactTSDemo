import ClassComponent from 'components/ClassComponent';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

let classComponent: ShallowWrapper<{ title: string; subtitle: string; }, { counter: number }, ClassComponent>;

const title = 'TestTitle';
const subtitle = 'SubTestTitle';

beforeEach(() => {
  classComponent = shallow(<ClassComponent title={title} subtitle={subtitle}/>);
});

test('should render without crashing', () => {
  expect(classComponent).toBeTruthy();
});

test('should pass props to HTML elements', () => {
  expect(classComponent.find('h1').text()).toBe(title);
  expect(classComponent.find('small').text()).toBe(subtitle);
});

test('should initialize with zero state', () => {
  expect(classComponent.state().counter).toBe(0);
});

test('should increase state when button is clicked', () => {
  expect(classComponent.state().counter).toBe(0);
  const button = classComponent.find('button');

  button.simulate('click');
  expect(classComponent.state().counter).toBe(1);
});

test('should update component when changing props', () => {
  classComponent.setProps({title: 'NewTestTitle'});
  expect(classComponent.instance().description).toBe('Awesome Description');
});

test('should update component when clicking button', () => {
  const button = classComponent.find('button');

  button.simulate('click');
  expect(classComponent.instance().description).toBe('Awesome Description');
});
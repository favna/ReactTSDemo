import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import FunctionalComponent from 'src/components/FunctionalComponent';

let functionalComponent: ShallowWrapper;

const title = 'TestTitle';
const subtitle = 'SubTestTitle';

beforeEach(() => {
  functionalComponent = shallow(<FunctionalComponent title={title} subtitle={subtitle}/>);
});

test('should render without crashing', () => {
  expect(functionalComponent).toBeTruthy();
});

test('should pass props to HTML elements', () => {
  expect(functionalComponent.find('h1').text()).toBe(title);
  expect(functionalComponent.find('small').text()).toBe(subtitle);
});
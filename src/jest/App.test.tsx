import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import App from 'src/App';
import ClassComponent from 'src/components/ClassComponent';
import ConnectedContainerComponent from 'src/components/ContainerComponent';

let app: ShallowWrapper;

beforeEach(() => {
  app = shallow(<App/>);
});

test('should render without crashing', () => {
  expect(app).toBeTruthy();
});

test('should contain ClassComponent child', () => {
  const classComponent = app.find(ClassComponent);
  expect(classComponent.length).toBe(1);
  expect(classComponent.props().title).toBe('TypeScript React App');
  expect(classComponent.props().subtitle).toBe('It\'s Awesome!');
});

test('should contain ConnectedContainerComponent child', () => {
  expect(app.find(ConnectedContainerComponent).length).toBe(1);
});
import React from 'react';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HuoLongComponent from './HuoLongComponent.js';

test('Check render of HuoLongComponent', () => {
  // Render a checkbox with label in the document
  configure({ adapter: new Adapter() })
  const customComponent = shallow(<HuoLongComponent title="Title" description="Description"/>);
  const title = <h2>Title</h2>;
  const description = <p>Description</p>;
  expect(customComponent.contains(title)).toEqual(true);
  expect(customComponent.contains(description)).toEqual(true);
});

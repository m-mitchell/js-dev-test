import React from 'react';
import FilterLink from '../../components/FilterLink';
import renderer from 'react-test-renderer';

test('Test filter button creation and filtering', () => {
  const component = renderer.create(<FilterLink />,);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger filter on a language type
  tree.props.setVisibilityFilter('PHP');
  tree = component.toJSON();
  expect(tree).toMatchSnapShot();
})

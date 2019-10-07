import React from 'react';
import ListFilter from '../../components/ListFilter';
import renderer from 'react-test-renderer';

test('Create filter list/options', () => {
  const component = renderer.create(

    <ListFilter />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})

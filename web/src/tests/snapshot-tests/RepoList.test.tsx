import React from 'react';
import RepoList from '../../components/RepoList';
import renderer from 'react-test-renderer';

test('Create repo list', () => {
  const component = renderer.create(

    <RepoList />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})

import React from 'react';
import Details from '../../components/Details';
import renderer from 'react-test-renderer';

test('Test navigation from commit details back to repo lists', () => {
  const component = renderer.create(
    <Details />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger showRepos to go back from a
  // repo commits view to show all repos
  tree.props.showRepos();
  tree = component.toJSON();
  expect(tree).toMatchSnapShot();
})

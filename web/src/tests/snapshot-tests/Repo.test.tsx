import React from 'react';
import Repo from '../../components/Repo';
import renderer from 'react-test-renderer';

test('Test navigation to commit details', () => {
  const component = renderer.create(
    <Repo
      key="140745386"
      name="accessible-google-places-autocomplete"
      description={null}
      language="TypeScript"
      forks_count="3"
      full_name="silverorange/accessible-google-places-autocomplete" />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger showCommits to display latest 20 commits
  tree.props.showCommits("silverorange/accessible-google-places-autocomplete");
  tree = component.toJSON();
  expect(tree).toMatchSnapShot();
})

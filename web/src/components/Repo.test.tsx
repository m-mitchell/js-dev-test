/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Repo from './Repo';

const exampleRepo = {
  'id': 140745386,
  'name': 'accessible-google-places-autocomplete',
  'full_name': 'silverorange/accessible-google-places-autocomplete',
  'description': null,
  'fork': false,
  'language': 'TypeScript',
  'forks': 3,
};

test('renders correctly', () => {
  const tree = renderer
    .create(<Repo repoData={exampleRepo} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

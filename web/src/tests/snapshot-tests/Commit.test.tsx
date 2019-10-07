import React from 'react';
import Commit from '../../components/Commit';
import renderer from 'react-test-renderer';

test('Create Commits Table TR w/ (Date, Author, Message)', () => {
  const component = renderer.create(

    <Commit
      commitDate="2018-10-24T18:50:13Z"
      commitAuthor="Michael Gauthier"
      commitMessage="Merge pull request #1 from nburka/gauthierm-l10n\n\nbetter padding on language controls" />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})

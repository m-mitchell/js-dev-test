import React from 'react';

const Commit = ({commitDate, commitAuthor, commitMessage}) => (
  <tr>
    <td>{commitDate}</td>
    <td>{commitAuthor}</td>
    <td>{commitMessage}</td>
  </tr>
)

export default Commit;

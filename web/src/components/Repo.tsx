import React, { useState } from 'react';
import moment from 'moment'

interface RepoProps {
  repoData: any
}
interface Commit {
  sha?: string
  commit?: any
}
const Repo: React.FC<RepoProps> = ({ repoData }) => {
  const [commit, setCommit]: [Commit, any] = useState({});
  const getCommit = async () => {
    if (commit.sha) {
      return;
    }
    try {
      const res = await fetch(`https://api.github.com/repos/${repoData.full_name}/commits`);
      const json = await res.json();
      if (json.length) {
        setCommit(json[0]);
      }
    } catch (err) {
      console.log('error', err);
    }
  }

  return (
    <div className="repo" onClick={() => getCommit()}>
      <h3>{repoData.name}</h3>
      <p>{repoData.description}</p>
      <dl>
        <dt>Language</dt>
        <dd>{repoData.language}</dd>
        <dt>Fork count</dt>
        <dd>{repoData.forks}</dd>
      </dl>
      { commit.sha
        && (
          <>
            <h4>Latest Commit</h4>
            <p>
              {commit.commit!.message}
              <br />
              <span className="commit-info">
                {commit.commit!.author.name} committed at {moment(commit.commit!.author.date).format('MM/DD/YY h:mm:ss a')}
              </span>
            </p>
          </>
        )
      }
    </div>
  );
};

export default Repo;

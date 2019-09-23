import React, { useEffect, useState } from 'react';
import Repo from './components/Repo';
import './App.css';

const App: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [filter, setFilter] = useState('all');
  const getRepos = async () => {
    try {
      const res = await fetch('http://localhost:4000/repos');
      const json = await res.json();
      setRepos(json);
      setLanguages(Array.from(new Set(json.map((repo: any) => repo.language))));
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    if (repos.length === 0) {
      getRepos();
    }
  });

  const filteredRepos = () => {
    if (filter === 'all') {
      return repos;
    }
    return repos.filter((repo: any) => repo.language === filter);
  }

  return (
    <div className="App">
      <h1>silverorange Repos</h1>
      <button type="button" onClick={() => setFilter('all')}>All</button>
      {languages.map((language: string) => <button key={language} type="button" onClick={() => setFilter(language)}>{language}</button>)}
      {filteredRepos().map((repo: any) => <Repo key={repo.id} repoData={repo} />)}
    </div>
  );
};

export default App;

import express from 'express';
import fs from 'fs';
import axios from 'axios';

export const repos = express.Router();

repos.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  fs.readFile('../data/repos.json', 'utf8', (err, fileData) => {
    if (err) {
      res.status(500);
      res.send({ error: err.toString() });
      return;
    }
    const fileJson = JSON.parse(fileData);
    axios.get('https://api.github.com/users/silverorange/repos')
      .then((response) => {
        const repoData = response.data.concat(fileJson);
        res.status(200);
        res.send(repoData.filter((repo: any) => !repo.fork));
      })
      .catch(error => res.status(500).send({ error: error.toString() }));
  })
});

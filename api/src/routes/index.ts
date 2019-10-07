import express from 'express';
import cors from 'cors';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.status(200);
  res.send('[]');
});

router.get('/repos', (req, res) => {
  res.header('Content-Type', 'application/json');
  axios.get('https://api.github.com/users/silverorange/repos').then(response => {
    console.log(response.data);
    res.status(200);
    res.send(response.data);
  });
});

export const repos = router;

const express = require('express');
const path = require('path');
const axios = require('axios');
const { GOOGLE_API_KEY } = require('./config');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'src/public')));

app.get('/api/address', (req, res, next) => {
  const query = req.query.search;
  const options = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
    params: {
      key: GOOGLE_API_KEY,
      location: '30.2672,-97.7431',
      radius: '50000',
      query,
    },
  };

  axios(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.use((req, res, next) => {
  const error = new Error('404 - Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).send(err.message);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Process listening on port ${process.env.PORT || 3000}`); // eslint-disable-line
});

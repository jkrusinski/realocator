const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const { GOOGLE_API_KEY } = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'src/public')));

// I wanted to come back and factor out these server routes, but didn't have time
app.get('/api/address', (req, res, next) => {
  const input = req.query.search;
  const options = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
    params: {
      key: GOOGLE_API_KEY,
      location: '30.2672,-97.7431',
      input,
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

app.get('/api/place', (req, res, next) => {
  const placeid = req.query.search;
  const options = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    params: {
      key: GOOGLE_API_KEY,
      placeid,
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

app.post('/api/realtors', (req, res, next) => {
  const addresses = req.body;

  Promise.all(addresses.map(({ location }) => { // eslint-disable-line
    return axios({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      params: {
        key: GOOGLE_API_KEY,
        type: 'real_estate_agency',
        rankby: 'distance',
        location,
      },
    }).then(response => response.data.results);
  }))
    .then((results) => {
      res.json(results);
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

app.listen(process.env.PORT || 3333, () => {
  console.log(`Process listening on port ${process.env.PORT || 3333}`); // eslint-disable-line
});

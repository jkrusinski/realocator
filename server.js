const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'src/public')));

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

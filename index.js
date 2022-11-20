const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./config/routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running [http://localhost:3000]');
});
const express = require('express');
const morgan = require('morgan');
const app = express();

const bookRouter = require('./routes/bookRouter');
const reviewRouter = require('./routes/reviewRouter');

const port = 3000;

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message });
}

app.use(express.json());
app.use(errorHandler);
app.use(morgan('tiny'));
app.use('/books', bookRouter);
app.use('/books/:bookId/reviews', reviewRouter);

app.get('/', (req, res, next) => {
  res.send('Hi');
});

app.post('/', (req, res, next) => {
  const body = req.body;
  res.json({
    dataFromBody: body,
  });
});

const start = async () => {
  try {
    app.listen(process.env.PORT || port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

const express = require('express');
const { checkBook } = require('../middlewares/checkBookMiddleware.js');
const { validateBody } = require('../middlewares/validateBody.js');

const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
  editBook,
} = require('../controllers/bookController.js');

router.post('/', validateBody, createBook);

router.get('/', getBooks);

router.get('/:bookId', checkBook, getBook);

router.patch('/:bookId', checkBook, editBook);

router.use('/:bookId/reviews', require('./reviewRouter'));

module.exports = router;

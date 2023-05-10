const { books } = require('../controllers/bookController');

const checkBook = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'There is no book with such ID' });
  }
  req.book = book;

  next();
};

module.exports = {
  checkBook,
};

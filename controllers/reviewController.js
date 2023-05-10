const { books } = require('../controllers/bookController');
const { v4: uuidv4 } = require('uuid');

const createReview = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  const review = {
    id: uuidv4(),
    comment: req.body.comment,
  };
  const book = books.find((book) => book.id === bookId);
  book.reviews.push(review);
  res.send('Review was successfully added');
};

const getReviews = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.id === bookId);
  const reviews = book.reviews;
  res.json(reviews);
};

const deleteReview = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  const reviewId = parseInt(req.params.reviewId);
  const book = books.find((book) => book.id === bookId);

  const updatedReviews = book.reviews.filter(
    (review) => review.id !== reviewId
  );
  book.reviews = updatedReviews;
  res.json({ message: 'Review was successfully deleted' });
};

module.exports = {
  createReview,
  getReviews,
  deleteReview,
};

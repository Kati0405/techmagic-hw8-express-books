const { books } = require('../controllers/bookController');

const checkReview = (req, res, next) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.id === bookId);

  const reviewId = parseInt(req.params.reviewId);
  const review = book.reviews.find((review) => review.id === reviewId);
  if (!review) {
    return res.status(404).json({ error: 'There is no review with such ID' });
  }
  req.review = review;

  next();
};

module.exports = {
  checkReview,
};

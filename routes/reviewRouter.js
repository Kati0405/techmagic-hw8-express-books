const express = require('express');
const { checkReview } = require('../middlewares/checkReviewMiddleware.js');
const router = express.Router({ mergeParams: true });

const {
  createReview,
  getReviews,
  deleteReview,
} = require('../controllers/reviewController.js');
const { checkBook } = require('../middlewares/checkBookMiddleware.js');

router.post('/', checkBook, createReview);

router.get('/', checkBook, getReviews);

router.delete('/:reviewId', checkBook, checkReview, deleteReview);

module.exports = router;

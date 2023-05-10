const validateBody = (req, res, next) => {
  const title = req.body.title;
  if (!title || title === '') {
    return res.status(400).json({ error: 'Please type a title' });
  }
  next();
};

module.exports = {
  validateBody,
};

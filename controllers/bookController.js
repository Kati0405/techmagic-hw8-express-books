const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    reviews: [
      {
        id: 1,
        comment: 'Nice',
      },
      {
        id: 2,
        comment: 'The best book ever',
      },
    ],
  },
];

const createBook = (req, res, next) => {
  const book = req.body;
  books.push(book);
  res.send('The book was created');
};

const getBooks = (req, res, next) => {
  res.json(books);
};

const getBook = (req, res, next) => {
  const book = req.book;
  res.json(book);
};

const editBook = (req, res, next) => {
  const book = req.book;
  const newTitle = req.body.title;
  book.title = newTitle;
  res.send("The book's title was updated");
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  editBook,
  books,
};

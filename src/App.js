// Sass
import '../src/styles/App.scss';

// Hooks
import { useState } from 'react';

// Data
import booksData from '../src/data/books.json';

// Components
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';


const allCategories = ['all', ...new Set(booksData.map((book) => book.category))];
console.log(allCategories);


const App = () => {

  const [books, setBooks] = useState(booksData);
  const [categories, setCategories] = useState(allCategories);

  const filterBooks = (category) => {

    if (category === 'all') {
      setBooks(books);
      return;
    }

    const newBooks = books.filter((book) => book.category === category)
    setBooks(newBooks)
  }



  return (
    <main>

      <div className="title">
        <h2>Bookshelf</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={categories} filterBooks={filterBooks}  />
      <Books books={books} />


    </main>
  );
}

export default App;

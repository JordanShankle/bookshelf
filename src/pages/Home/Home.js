// Components
import Categories from '../../components/Categories/Categories';
import BookList from '../../components/BookList/BookList';

// Data
import booksData from '../../data/books.json';

// Hooks
import { useState } from 'react';


const allCategories = ['all', ...new Set(booksData.map((book) => book.category))];
console.log(allCategories);



const Home = () => {

    const [books, setBooks] = useState(booksData);
    const [categories, setCategories] = useState(allCategories);

    const filterBooks = (category) => {

        if (category === 'all') {
            setBooks(booksData);
            return;
        }

        const newBooks = booksData.filter((book) => book.category === category)
        setBooks(newBooks)
    }

    return (
        <main>
            <div className="title">
                <h2>Bookshelf</h2>
                <div className="underline"></div>
            </div>

            <Categories categories={categories} filterBooks={filterBooks} />
            <BookList books={books} />
        </main>
    );
}

export default Home;
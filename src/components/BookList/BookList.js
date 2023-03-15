// Sass
import './BookList.scss'

// import { Link } from 'react-router-dom';
import Book from '../Book/Book';

const BookList = ({ books }) => {


    return (
        <section>
            {
                books.map((book) => {

                    return (
                        <Book key={book.id} {...book} />
                    )

                })
            }
        </section>
    );
}

export default BookList;
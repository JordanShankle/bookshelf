// Sass
import './BookList.scss'

// import { Link } from 'react-router-dom';
import Book from '../Book/Book';

const BookList = ({ books }) => {


    return (
        <section>
            {
                books.map((book) => {
                    const { id } = book;

                    return (
                        <Book key={id} {...book} />
                    )


                })
            }
        </section>
    );
}

export default BookList;
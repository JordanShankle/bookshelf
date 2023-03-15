import '../SingleBook/SingleBook.scss'
import { Link, useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react';

// Data
import data from '../../data/books.json';


const SingleBook = () => {

    const { bookId } = useParams();

    // const [{ id, title, url, image, author, summary, category, pages, rating }] = data;

    const filteredBook = data.filter(book => book.id === bookId)

    console.log(filteredBook);

    const [id, title] = filteredBook;

    return (

        <>

            {
                filteredBook.map((book) => {
                    return (

                        < article key={book.id} className='book' >

                            <h3 className="book__title" >{book.title}</h3>


                            <a href={book.url} className="book__image__container" >
                            <img src={book.image} alt="book cover" className='book__image' />
                        </a>


                            <span className="book__author" >By: {book.author}</span>
                            <span className="book__summary" >{book.summary}</span>
                            <span className="book__category" >Genre: {book.category}</span>
                            <span className="book__pages" >Pages: {book.pages}</span>
                            <span className="book__rating" >Rating: {book.rating}</span>

                            <Link to='/' className='btn-details' >
                                Back Home
                            </Link>

                        </article>
                    )
                }
                )
            }

        </>

    );
}


export default SingleBook;
// Sass
import './Books.scss'

const Books = ({ books }) => {


    return (
        <>
            {
                books.map((book) => {
                    const { id, image, title, author, category, pages, summary, rating } = book;

                    return (
                        <article key={id} className='book'>

                            <h3 className="book__title" >{title}</h3>
                            <div className="book__image__container">
                                <img src={image} alt="book cover" className='book__image' />
                            </div>
                            <span className="book__author" >By: {author}</span>
                            <span className="book__category" >Genre: {category}</span>
                            <span className="book__pages" >Pages: {pages}</span>
                            <span className="book__rating" >Rating: {rating}</span>
                            <span className="book__summary" >{summary}</span>

                        </article>
                    )


                })
            }
        </>
    );
}

export default Books;
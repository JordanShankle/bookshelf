import { Link } from "react-router-dom";

const Book = ({ id, image, title, author, category, pages, summary, rating, url }) => {

    // const navigate = useNavigate();



    return (
        <article key={id} className='book'>

            <h3 className="book__title" >{title}</h3>


            <a href={url} className="book__image__container" >
                <img src={image} alt="book cover" className='book__image' />
            </a>


            <span className="book__author" >By: {author}</span>
            <span className="book__summary" >{summary}</span>
            {/* <span className="book__category" >Genre: {category}</span> */}
            {/* <span className="book__pages" >Pages: {pages}</span> */}
            {/* <span className="book__rating" >Rating: {rating}</span> */}


            {/* <button className="btn-details" onClick={() => navigate(`/book/${id}`) } >details</button> */}
            
            <Link to={`/book/${id}`} className='btn-details' >
                details
            </Link>

        </article>
    );
}

export default Book;
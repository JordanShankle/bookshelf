const Books = ({ books }) => {


    return (
        <>
            {
                books.map((book) => {
                    const { id, title, author, category, pages, summary, rating } = book;

                    return (
                        <article key={id} className='book'>

                            <h3>{title}</h3>
                            <p>By: {author}</p>
                            <p>Genre: {category}</p>
                            <p>Pages: {pages}</p>
                            <p>Rating: {rating}</p>
                            <p>{summary}</p>

                        </article>
                    )


                })
            }
        </>
    );
}

export default Books;
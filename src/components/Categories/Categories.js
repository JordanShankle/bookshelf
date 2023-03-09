// Sass
import './Categories.scss'

const Categories = ({ categories, filterBooks }) => {
    return (
        <div className="btn-container">

            {
                categories.map((category, index) => {
                    return (
                        <button
                            type='button'
                            key={index}
                            className="filter-btn"
                            onClick={() => filterBooks(category)}
                        >
                            {category}
                        </button>
                    )
                })
            }


        </div>
    );
}

export default Categories;
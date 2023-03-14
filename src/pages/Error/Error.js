import '../Error/Error.scss'
import { Link } from 'react-router-dom'

const Error = () => {


    return (
        <section className="error error-section">
            <div className="error-container">
                <h1 className='error-title' >oops! it's a dead end...</h1>
                <Link to='/' className='btn' >back home
                </Link>
            </div>
        </section>
    )
}

export default Error
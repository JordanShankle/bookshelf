// Sass
import '../src/styles/App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
// import SingleBook from './pages/SingleBook/SingleBook';


const App = () => {


  return (
    <Router>

      <Routes>

        <Route path='/' element={<Home />} />
        {/* <Route path='/book/:id' element={<SingleBook />} /> */}
        <Route path='*' element={<Error />} />

      </Routes>

    </Router>
  );
}

export default App;

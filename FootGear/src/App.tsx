import { Route, Routes } from 'react-router-dom';
import FullSnk from './Pages/FullSnk/FullSnk';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFoundPage/NotFound';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import CollectionPage from './Pages/CollectionPage/CollectionPage';
import './App.scss';

function App() {

  return (
    <div className='wrapper'>
      <div className='wrapper-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/items/:id' element={<FullSnk />} />
          <Route path='/collection/items/:id' element={<FullSnk />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

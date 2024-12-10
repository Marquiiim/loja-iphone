import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog'
import Contact from './components/pages/Contact'


import Navbar from './components/layout/Navbar'

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog_home' element={<Catalog />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

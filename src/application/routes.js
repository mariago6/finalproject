import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SearchRecipes from '../pages/SearchRecipes';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NavbarHeader from '../components/Navbar';

const AllRoutes = () => {
  return(
    <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchrecipes' element={<SearchRecipes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<div>404</div> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes; 
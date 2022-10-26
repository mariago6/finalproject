import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from '../pages/Home'
import SearchRecipes from '../pages/SearchRecipes';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NavbarHeader from '../components/layout/Navbar';
import RecipieDetails from '../pages/RecipieDetails';
import Reset from '../pages/Reset';
import Favorites from '../pages/Favorites';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/layout/Footer';


const AllRoutes = () => {
  return(
    <BrowserRouter>
      <ToastContainer />
      <NavbarHeader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/searchrecipes' element={<SearchRecipes />} />
        <Route path='/searchrecipes/:id' element={<RecipieDetails />} /> 
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<Reset />} />
        <Route path="*" element={<div>404</div> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AllRoutes; 
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import TermsAndPolicy from './components/TermsAndPolicy';
import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AdminScreen from './screens/AdminScreen';
import UsersList from './components/Admin/UsersList';
import PizzasList from './components/Admin/PizzasList';
import AddNewPizza from './components/Admin/AddNewPizza';
import EditPizza from './components/Admin/EditPizza';

function App() {
  return (
    <>
      <NavBar />
      <TopBar />
      <Routes>
        <Route path='/admin' element={ <AdminScreen /> } >
          <Route path='/admin' element={ <UsersList /> } exact/>
          <Route path='/admin/pizzalist' element={ <PizzasList /> } exact/>
          <Route path='/admin/addnewpizza' element={ <AddNewPizza /> } exact/>
          <Route path='/admin/pizza/:id' element={ <EditPizza /> } exact/>
        </Route>

        <Route path='/' element={ <HomeScreen /> } exact/>

        <Route path='/about' element={ <About /> } exact/>

        <Route path='/contact' element={ <Contact /> } exact/>

        <Route path='/policy' element={ <TermsAndPolicy /> } exact/>

        <Route path='/cart' element={ <CartScreen /> } exact/>

        <Route path='/login' element={ <LoginScreen /> } exact/>

        <Route path='/register' element={ <RegisterScreen /> } exact/>

      </Routes>
    </>
  );
}

export default App;

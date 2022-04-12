import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/loginfile'
import LandingPage from "./pages/landingpage"
import CartPage from './pages/cartpage';
import ChekoutPage from './pages/checkoutpage';
import ProductPage from './pages/productpage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

import Adminpage2 from './pages/adminpage2';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>

      <Route path="/" element={<LoginPage />}/>
      <Route path="/landingpage" element={<LandingPage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/checkout" element={<ChekoutPage />}/>
      <Route path="/product/:id" element={<ProductPage />}/>
      <Route path="/adminpage" element={<Adminpage2 />}/>
      <Route path="/orderconfirmation" element={<OrderConfirmationPage />}/>
      {/* <Route path="/adminpage2" element={<Adminpage2 />}/> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './component/auth/ForgotPassword';
import Login from './component/auth/Login';
import SignUp from './component/auth/Signup';
import Dashboard from './component/auth/Dashboard';
import Home from './component/Home';
import Footer from './component/Footer';
import Statcard from './component/Statcard';
import PageNotFound from './component/404';
import About from './component/About';
import Contact from './component/Contact';
import Top from './component/Top';
import ProductList from './component/Product/ProductList';
import ProductDetail from './component/Product/ProductDetail'; 
import Cart from './component/Cart/Cart';  
import { useState } from 'react';

function App() {
 
	const [cart , setCart] = useState([]);

	const addToCart = (item)=>{

    console.log(item);
		setCart([...cart, item]);
    console.log(cart);
	}
  // const removeFromCart = (itemToRemove) => {
  //   const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
  //   setCart(updatedCart);
  // };
  

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

	
  
  return (
    
    <div className="App">
      <header className="App-header">
        <Top size={cart.length}/>
        </header> 
        <Routes> 
        {/* <Switch> */}
        <Route path="/" element={<Home />} />
        <Route path="*" Component={PageNotFound}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList addToCart={addToCart}/>}  />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Statcard" element={<Statcard />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}  />
          {/* </Switch> */}
        </Routes>  

        <Footer/>
        
       
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { Link ,Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { useState } from 'react';


function App() {
  const [cartItems,setCartItems] = useState([]) 
  const [userName,setUserName] = useState("Guest")
  return (
    <div className="App">
      <header>
        <div id='User_Profile'>
          <table>
            <tr>
              <td><img src="https://www.shareicon.net/download/2015/08/15/85434_guest_512x512.png" alt="" id='User_Image'/></td>
              <td><h3>{userName}</h3></td>
            </tr>
          </table>
        </div>
      <div id='Nav_Files'>
            <table>
                <tr>
                    <td><b><Link to="/" className='Nav_Link'>Home</Link></b></td>
                    <td><b><Link to="/About" className='Nav_Link'>About</Link></b></td>
                    <td><b><Link to="/Contact" className='Nav_Link'>Login</Link></b></td>
                    <td><b><Link to="/Cart"className='Nav_Link'>Cart</Link></b></td>
                    
                </tr>
            </table>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Main setCartItems={setCartItems}/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact setName={setUserName}/>}></Route>
        <Route path='/Cart' element={<Cart myCart={cartItems}/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './components/pages/ShopCategory';
import Shop from './components/pages/shop';
import Product from './components/pages/product';
import Cart from './components/pages/Cart';
import LoginSignup from './components/pages/LoginSignup';
import Footer from './components/Footer/Footer';
import FAQs from './components/FAQs/FAQs';
import Signup from './components/pages/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Chair' element={<ShopCategory category="Chair"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/FAQs' element={<FAQs/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

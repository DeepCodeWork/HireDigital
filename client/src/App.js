import React from 'react';
import './bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Home from './views/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './views/ProductDetails';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={Home} exact/>
            <Route path='/product/:id' component={ProductDetails}/>
            <Route path='/update/:id' component={UpdateProduct}/>
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

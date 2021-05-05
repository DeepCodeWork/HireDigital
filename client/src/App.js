import React from 'react';
import './bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Home from './views/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './views/ProductCard';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={Home} exact/>
            <Route path='/product/:id' component={ProductDetail}/>
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

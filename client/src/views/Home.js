import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import {API_URL} from '../common/constants';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = () => { 

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            axios.get(`${API_URL}/product/all`)
                .then(response => {
                    const { data } = response;
                    setProducts(data.response);
                })
        }
        fetchProducts();
    },[])
    const productsList =  products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3} key={product.productId}>
            <Product product = {product}/>
        </Col>
    ))
    return (
        <>
            <div>
                <Link to='/update/add/1'><Button>Add product</Button></Link>
            </div>
            <Row>
                {productsList}
            </Row> 
        </>
    )
}

export default Home

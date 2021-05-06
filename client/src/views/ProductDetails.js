import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {API_URL} from '../common/constants';


const ProductDetails = ({match}) => {

    const {id} = match.params;

    const [product, setProduct] = useState({});

    const getProductById_URL = `${API_URL}/product/${id}`;
    const saveViewsByUser_URL = `${API_URL}/view/${5}/${1003}`;
    const fetchProduct = async () => {
        const {data} = await axios.get(getProductById_URL)
        setProduct(data.response);
    }
    const saveViewsOfUser = async () => {
        await axios.get(saveViewsByUser_URL);
    } 
    useEffect(() => {

        fetchProduct();
        saveViewsOfUser();
        
    }, [])
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.productImage} alt={product.productName} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.productName}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <b style={{color:'black'}}>Price:</b>${Math.floor(product.productPrice)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <b style={{color:'yellow'}}>Discounted Price:</b> ${Math.floor(product.salePrice)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <b style={{color:'black'}}>Discription :</b> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Button style={{color:'yellow', backgroundColor: product.productStock ? 'green' : 'red'}} disabled>{ product.productStock ? 'In Stock' : 'Not in stock'}</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Link to={{
                            pathname: `/update/edit/${product.productId}`,
                            product}} ><Button style={{color:'red', backgroundColor: 'yellow'}}>Update</Button></Link>
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
            </Row> 
        </>
    )
}

export default ProductDetails

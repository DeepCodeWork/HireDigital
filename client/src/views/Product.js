import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    const {
        productId,
        productImage,
        productName,
        productPrice
    } = product;
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${productId}`}>
                <Card.Img src={productImage} variant='top'/>
            </a>

            <Card.Body>
            <a href={`/product/${productId}`}>
                <Card.Title as='div'><strong>{productName}</strong></Card.Title>
            </a>
            <Card.Text as='h3'>${Math.floor(productPrice)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product

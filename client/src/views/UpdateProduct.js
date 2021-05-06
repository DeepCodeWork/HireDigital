import axios from "axios";
import { useEffect, useState } from "react";
import {API_URL} from '../common/constants';

const { Form, Button, ButtonGroup } = require("react-bootstrap");

const UPDATE_PRODUCT_API = `${API_URL}/product/update`;
const ADD_PRODUCT_API = `${API_URL}/product/add`;

const AddOrUpdateProduct = ({match}) => {

    const {id, verb} = match.params

    const editAction = verb === 'edit' ? true : false;

    const getProductById_URL = `${API_URL}/product/${id}`;

    const fetchProduct = async () => {
        const {data} = await axios.get(getProductById_URL)
        setProduct(data.response);
    }

    const [product, setProduct] = useState({
        productCategory:'',
        productId: '',
        productImage: '',
        productName: '',
        productPrice: '',
        productStock: '',
        salePrice: ''
    });

    const [productUpdated, setProductUpdated] = useState(false);

    const updateDetail = (field, value) => {
        console.log(value, field);
        const newProduct = {};
        newProduct[field] = value;
        const oldState = {...product};
        setProduct({...oldState, ...newProduct});
    }

    const updateProduct = async (event) => {
        event.preventDefault();
        const {data} = await axios.put(UPDATE_PRODUCT_API, product);
        if(data.response.productId){
            setProductUpdated(true);
        }else{
            setProductUpdated(false);
        }
    }

    const addProduct = async (event) => {
        event.preventDefault();
        const { data } = await axios.post(ADD_PRODUCT_API, product);
        if(data.response.productId){
            setProductUpdated(true);
        }else{
            setProductUpdated(false);
        }

    }

    useEffect(()=>{
        if(editAction)
            fetchProduct();

    },[])

      

    return (
        <>  <div className = 'px-auto'>
                <h1>{verb !=='add' ? 'Update Product' : 'Add Product'}</h1>
            </div>
            <div style={{color:'green'}}>{productUpdated ? '':'PRODUCT UPDATED'}</div>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder={product.productName} onChange={(e)=> updateDetail('productName', e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder={product.productImage} onChange={(e)=> updateDetail('productImage', e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder={product.productCategory} onChange={(e)=> updateDetail('productCategory', e.target.value)} readOnly={verb !=='add'? true: false}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder={product.productPrice} onChange={(e)=> updateDetail('productPrice', e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sales Price</Form.Label>
                    <Form.Control type="text" placeholder={product.salePrice} onChange={(e)=> updateDetail('salePrice', e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>In Stock  </Form.Label>
                    <ButtonGroup aria-label="Basic example" className='px-2' onClick={(e)=> updateDetail('productStock', e.target.value)} >
                        <Button variant="secondary" value='TRUE'>Yes</Button>
                        <Button variant="secondary" value='FALSE'>No</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=>{editAction ? updateProduct(e) : addProduct(e)}}>
                        Submit
                    </Button>
                </Form>
        </>

    )

}

export default AddOrUpdateProduct;
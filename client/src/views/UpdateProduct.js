const { Form, Button, ButtonGroup } = require("react-bootstrap");

const UpdateProduct = (props) => {

    const {
        productCategory,
        productId,
productImage,
productName,
productPrice,
productStock,
salePrice
    } = props.location.product;

    return (
        <>  <div className = 'px-auto'>
                <h1>Update Product</h1>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder={productName} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder={productCategory} readOnly/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder={productImage}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder={productCategory}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder={productPrice}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sales Price</Form.Label>
                    <Form.Control type="text" placeholder={salePrice}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>In Stock  </Form.Label>
                    <ButtonGroup aria-label="Basic example" className='px-2'>
                        <Button variant="secondary">Yes</Button>
                        <Button variant="secondary">No</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </>

    )

}

export default UpdateProduct;
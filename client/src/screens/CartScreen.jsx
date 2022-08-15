import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {FaMinusCircle, FaPlusCircle, FaTrash} from 'react-icons/fa';
import { addToCart, deleteFromCart } from '../actions/cartAction';


const CartScreen = () => {
    const dispatch = useDispatch();

    const cartState = useSelector(state => state.cartReducer);
    const {cartItems} = cartState;

    const cartItemsTotal = cartItems.reduce((x, item) => x + item.price, 0)

  return (
    <>
        <Container>
            <Row>
                <Col md={6}>
                    <h1>My Cart Items</h1>
                    <Row>
                        {
                            cartItems.map((item) => (
                                <>
                                    <Col md={7}>
                                        <h5>{item.name} [{item.varient}]</h5>
                                        <h6>Price: {item.quantity} X {item.prices[0][item.varient]} = {item.price}</h6>
                                        <h6>
                                            Quantity: &nbsp;
                                            <FaMinusCircle
                                              className='text-danger'
                                              style={{cursor: 'pointer'}}
                                              onClick={() => {dispatch(addToCart(item, item.quantity-1, item.varient))}}

                                            /> &nbsp;
                                            {item.quantity} &nbsp;
                                            <FaPlusCircle
                                              className='text-success'
                                              style={{cursor: 'pointer'}}
                                              onClick={() => {dispatch(addToCart(item, item.quantity+1, item.varient))}}
                                            />
                                        </h6>
                                    </Col>

                                    <Col md={5}>
                                        <img src={item.image} alt={item.name} style={{width: '80px', height: '80px'}} />
                                        <FaTrash
                                            className='ms-5 text-danger'
                                            style={{cursor: 'pointer'}}
                                            onClick={() => {dispatch(deleteFromCart(item))}}/>
                                    </Col>

                                    <hr />
                                </>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={4}>
                    <h1>Payment Info</h1>
                    <h4>Sub Total</h4>
                    <h4>₹{cartItemsTotal} /-</h4>
                    <Button>Checkout</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CartScreen;
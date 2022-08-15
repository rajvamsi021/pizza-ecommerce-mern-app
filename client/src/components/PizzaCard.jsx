import React, {useState} from 'react';
import {Modal, Card, Button, Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartAction';

const PizzaCard = ({pizza}) => {
  const dispatch = useDispatch();

  const [pizzaVarient, setPizzaVarient] = useState('small');
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, pizzaQuantity, pizzaVarient));
  }



  return (
    <>
    <Card style={{ width: '18rem', marginBottom: '30px' }}>
      <Card.Img variant="top" src={pizza.image} style={{height: '150px', cursor: 'pointer'}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr />
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={pizzaVarient} onChange={(e) => {setPizzaVarient(e.target.value)}}>
                    {pizza.varients.map((varient) => (
                        <option value={varient} key={varient}>{varient}</option>
                    ))}
                </select>
            </Col>

            <Col md={6}>
                <h6>Quantity</h6>
                <select onChange={(e) => {setPizzaQuantity(e.target.value)}} value={pizzaQuantity}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6} className='pt-2'>Price: ₹{pizza.prices[0][pizzaVarient] * pizzaQuantity} /-</Col>
          <Col md={6}>
            <Button onClick={addToCartHandler} className='bg-warning text-white'>Add To Cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>

    {/* modal */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Card.Img variant="top" src={pizza.image} style={{ height: "250px" }} />
        </div>
        <div className='mt-3'>
          <h5>Description :</h5>
          <h6>{pizza.description}</h6>
        </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default PizzaCard;
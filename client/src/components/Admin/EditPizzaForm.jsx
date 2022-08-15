import React, {useEffect, useState} from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { editPizzaDetails } from '../../actions/pizzaAction';

const EditPizzaForm = ({pizzaFetchedFromId}) => {
    const dispatch = useDispatch();

    const [pizzaName, setPizzaName] = useState(pizzaFetchedFromId.name);
    const [smallPrice, setSmallPrice] = useState(pizzaFetchedFromId.prices[0]['small']);
    const [mediumPrice, setMediumPrice] = useState(pizzaFetchedFromId.prices[0]['medium']);
    const [largePrice, setLargePrice] = useState(pizzaFetchedFromId.prices[0]['large']);
    const [pizzaImage, setPizzaImage] = useState(pizzaFetchedFromId.image);
    const [pizzaDescription, setPizzaDescription] = useState(pizzaFetchedFromId.description);
    const [pizzaCategory, setPizzaCategory] = useState(pizzaFetchedFromId.category);

    const editPizzaDetailsSubmitHandler = (e) => {
        e.preventDefault();

        const edited_pizza = {
            _id: pizzaFetchedFromId._id,
            name: pizzaName,
            prices: {
              small: smallPrice,
              medium: mediumPrice,
              large: largePrice
            },
            category: pizzaCategory,
            image: pizzaImage,
            description: pizzaDescription
        }

        dispatch(editPizzaDetails(edited_pizza));
    }


  return (
    <>
        <Form className='bg-light p-4' method="POST">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Pizza Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Pizza Name"
                        value={pizzaName}
                        onChange={(e) => {setPizzaName(e.target.value)}}
                    />
                </Form.Group>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Small</Form.Label>
                        <Form.Control value={smallPrice} onChange={(e) => {setSmallPrice(e.target.value)}} type='number' placeholder='Enter small pizza price'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMedium">
                        <Form.Label>Medium</Form.Label>
                        <Form.Control value={mediumPrice} onChange={(e) => {setMediumPrice(e.target.value)}} type='number' placeholder='Enter medium pizza price'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLarge">
                        <Form.Label>Large</Form.Label>
                        <Form.Control value={largePrice} onChange={(e) => {setLargePrice(e.target.value)}} type='number' placeholder='Enter large pizza price'/>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pizza Image</Form.Label>
                    <Form.Control type="text" value={pizzaImage} placeholder="Add Image URL" onChange={(e) => {setPizzaImage(e.target.value)}}/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Description</Form.Label>
                <Form.Control value={pizzaDescription} onChange={(e) => {setPizzaDescription(e.target.value)}} placeholder="Enter description" type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Category</Form.Label>
                <Form.Control placeholder="Enter Category" value={pizzaCategory} onChange={(e) => {setPizzaCategory(e.target.value)}} type="text"/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={editPizzaDetailsSubmitHandler}>
                Save Pizza Details
            </Button>
        </Form>
    </>
  )
}

export default EditPizzaForm;
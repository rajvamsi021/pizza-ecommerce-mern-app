import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { filterPizza } from '../actions/pizzaAction';

const Filters = () => {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState('');
    const [category, setCategory] = useState('all');

    const filterPizzaHandler = () => {
        dispatch(filterPizza(searchKey, category));
    }

  return (
    <>
    <Form className='p-4 mb-5 bg-info'>
      <Row>
        <Col>
          <Form.Control
            placeholder="Search Pizza"
            value={searchKey}
            onChange={(e) => {setSearchKey(e.target.value)}}
          />
        </Col>
        <Col>
        <Form.Select value={category} onChange={(e) => {setCategory(e.target.value)}}>
            <option value='all'>All</option>
            <option value='veg'>Veg</option>
            <option value='nonveg'>Non-Veg</option>
        </Form.Select>
        </Col>
        <Col>
            <Button onClick={filterPizzaHandler}>Search</Button>
        </Col>
      </Row>
    </Form>
    </>
  )
}

export default Filters
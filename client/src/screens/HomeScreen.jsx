import React, { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPizzas } from '../actions/pizzaAction';
import Spinner from '../components/Spinner';
import PizzaCard from '../components/PizzaCard';
import Filters from '../components/Filters';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const pizzastate = useSelector(state => state.getAllPizzaReducer);
    const {loading, pizzas, error} = pizzastate;

    const callHomePage = () => {
        dispatch(getAllPizzas());
    }

    useEffect(() => {
        callHomePage();
    }, [dispatch])
  return (
    <>
        <Container className='mt-5'>
            <Filters />
            {loading ? <Spinner />
                     : error ? <h1>Error while fetching data.</h1>
                     : (
                        <Row>
                            {pizzas.map((pizza) => (
                                <Col md={4} className='mb-5' key={pizza._id}>
                                    <PizzaCard pizza={pizza}/>
                                </Col>
                            ))}
                        </Row>
            )}
        </Container>
    </>
  )
}

export default HomeScreen
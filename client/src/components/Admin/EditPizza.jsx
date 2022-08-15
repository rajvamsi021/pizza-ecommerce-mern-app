import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { getPizzaDetailsById } from '../../actions/pizzaAction';
import Spinner from '../Spinner';
import EditPizzaForm from './EditPizzaForm';

const EditPizza = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const pizzaIDState = useSelector(state => state.getPizzaByIdReducer);
    const {loading, success, pizzaFetchedFromId } = pizzaIDState;

    useEffect(() => {
        dispatch(getPizzaDetailsById(id));
    }, [dispatch]);


  return (
    <>
    {loading ? <Spinner />
                 : !success ? <h1>Error while fetching data.</h1>
                 : (<EditPizzaForm pizzaFetchedFromId={pizzaFetchedFromId}/>)
    }
    </>
  )
}

export default EditPizza;
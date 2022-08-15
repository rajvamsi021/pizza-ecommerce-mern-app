import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { getAllPizzas, deletePizzaFromDB } from '../../actions/pizzaAction';
import Spinner from '../Spinner';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';

const PizzasList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pizzaState = useSelector(state => state.getAllPizzaReducer);
    const {loading, pizzas, error} = pizzaState;

    const pizzaEditHandler = (pizza) => {
        navigate(`/admin/pizza/${pizza._id}`);
    }

    const pizzaDeleteHandler = (pizza) => {
        dispatch(deletePizzaFromDB(pizza._id));

        // fetching all pizzas after deleting an pizza.
        dispatch(getAllPizzas());
    }

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

  return (
    <>
        {loading ? <Spinner />
                 : error ? <h1>Error while fetching data.</h1>
                 : (
                    <>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Pizza Name</th>
                                <th>Prices</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzas.map((pizza) => (
                                <tr key={pizza._id}>
                                    <td><img src={pizza.image} alt='logo' style={{width: '120px', height: '80px'}}/></td>
                                    <td>{pizza.name}</td>
                                    <td>
                                        Small: {pizza.prices[0]['small']} <br />
                                        Medium: {pizza.prices[0]['medium']} <br />
                                        Large: {pizza.prices[0]['large']}
                                    </td>
                                    <td>{pizza.category}</td>
                                    <td>
                                        <AiFillEdit
                                            className='me-2'
                                            style={{cursor: 'pointer'}}
                                            onClick={() => pizzaEditHandler(pizza)}
                                        />
                                        <AiFillDelete
                                            className='ms-2'
                                            style={{cursor: 'pointer'}}
                                            onClick={() => pizzaDeleteHandler(pizza)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                   </Table>
                   </>
        )}
    </>
  )
}

export default PizzasList;
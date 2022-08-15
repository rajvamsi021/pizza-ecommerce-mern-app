import {toast} from 'react-toastify';

export const getAllPizzas = () => async (dispatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'});
    try {
        const res = await fetch('/getAllPizzas', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: data});
    } catch(err) {
        dispatch({type: 'GET_PIZZAS_FAIL', payload: err});
    }

}


export const addPizzaToDB = (newPizza) => async (dispatch) => {
    dispatch({type: 'ADD_PIZZAS_REQUEST'});
    try {
        const res = await fetch('/addpizza', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newPizza.name,
                prices: {
                    small: newPizza.prices.small,
                    medium: newPizza.prices.medium,
                    large: newPizza.prices.large
                },
                category: newPizza.category,
                image: newPizza.image,
                description: newPizza.description
            })
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'ADD_PIZZAS_SUCCESS'});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
            window.location.href = '/admin/pizzalist';
        }
        else {
            dispatch({type: 'ADD_PIZZAS_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
    } catch(err) {
        dispatch({type: 'ADD_PIZZAS_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}


export const deletePizzaFromDB = (pizza_id) => async (dispatch) => {
    dispatch({type: 'DELETE_PIZZA_REQUEST'});
    try {
        const res = await fetch(`/delete-pizza/${pizza_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        if(data) {
            dispatch({type: 'DELETE_PIZZA_SUCCESS'});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
        else {
            dispatch({type: 'DELETE_PIZZA_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }

    } catch(err) {
        dispatch({type: 'DELETE_PIZZA_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}


export const getPizzaDetailsById = (pizza_id) => async (dispatch) => {
    dispatch({type: 'GET_PIZZA_BY_ID_REQUEST'});
    try {
        const res = await fetch(`/get-pizza-by-id/${pizza_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        if(data) {
            dispatch({type: 'GET_PIZZA_BY_ID_SUCCESS', payload: data});
        }
        else {
            dispatch({type: 'GET_PIZZA_BY_ID_FAIL', payload: data.error});
        }
    } catch(err) {
        dispatch({type: 'GET_PIZZA_BY_ID_FAIL', payload: err});
    }
}


export const editPizzaDetails = (newPizza) => async (dispatch) => {
    dispatch({type: 'EDIT_PIZZAS_REQUEST'});
    try {
        const res = await fetch('/editpizza', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: newPizza._id,
                name: newPizza.name,
                prices: {
                    small: newPizza.prices.small,
                    medium: newPizza.prices.medium,
                    large: newPizza.prices.large
                },
                category: newPizza.category,
                image: newPizza.image,
                description: newPizza.description
            })
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'EDIT_PIZZAS_SUCCESS'});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
            window.location.href = '/admin/pizzalist';
        }
        else {
            dispatch({type: 'EDIT_PIZZAS_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
    } catch(err) {
        dispatch({type: 'EDIT_PIZZAS_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}


export const filterPizza = (searchKey, category) => async (dispatch) => {
    let filteredPizza;
    dispatch({type: 'GET_PIZZAS_REQUEST'});
    try {

        const res = await fetch('/getAllPizzas', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        filteredPizza = data.filter(pizza => pizza.name.toLowerCase().includes(searchKey.toLowerCase()));

        if(category !== 'all') {
            filteredPizza = data.filter(pizza => pizza.category.toLowerCase() === category.toLowerCase());
        }

        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: filteredPizza});

    } catch(err) {
        dispatch({type: 'GET_PIZZAS_FAIL', payload: err})
    }


}
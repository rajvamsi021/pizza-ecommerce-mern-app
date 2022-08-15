export const getAllPizzaReducer = (state = {pizzas: []}, action) => {
    switch(action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas: action.payload,
                loading: false
            }

        case 'GET_PIZZAS_FAIL':
            return {
                error: action.payload,
                loading: false
            }


        default: return state
    }
}


export const addPizzaReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PIZZAS_REQUEST':
            return {
                loading: true
            }

        case 'ADD_PIZZAS_SUCCESS':
            return {
                loading: false,
                success: true
            }

        case 'ADD_PIZZAS_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const deletePizzaReducer = (state = {}, action) => {
    switch(action.type) {
        case 'DELETE_PIZZA_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'DELETE_PIZZA_SUCCESS':
            return {
                loading: false,
                success: true
            }

        case 'DELETE_PIZZA_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const getPizzaByIdReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_PIZZA_BY_ID_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'GET_PIZZA_BY_ID_SUCCESS':
            return {
                loading: false,
                success: true,
                pizzaFetchedFromId: action.payload
            }

        case 'GET_PIZZA_BY_ID_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export const editPizzaReducer = (state = {}, action) => {
    switch(action.type) {
        case 'EDIT_PIZZAS_REQUEST':
            return {
                loading: true
            }

        case 'EDIT_PIZZAS_SUCCESS':
            return {
                loading: false,
                success: true
            }

        case 'EDIT_PIZZAS_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}
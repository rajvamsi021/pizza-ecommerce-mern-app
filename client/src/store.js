import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzaReducer, addPizzaReducer, deletePizzaReducer, getPizzaByIdReducer, editPizzaReducer } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer, getAllUsersReducer, deleteUserReducer, changeUserAdminStatusReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    addPizzaReducer: addPizzaReducer,
    deletePizzaReducer: deletePizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllUsersReducer: getAllUsersReducer,
    deleteUserReducer: deleteUserReducer,
    changeUserAdminStatusReducer: changeUserAdminStatusReducer
});

const cartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const loggedInUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItem
    },
    loginUserReducer: {
        currentUser: loggedInUser
    }
}


const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
import {toast} from 'react-toastify';


export const registerUser = (user) => async (dispatch) => {
    dispatch({type: 'USER_REGISTER_REQUEST'});
    try {
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password,
                cpassword: user.cpassword
            })
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'USER_REGISTER_SUCCESS'});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
            window.location.href = '/login';
        }
        else {
            dispatch({type: 'USER_REGISTER_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }

    } catch(err) {
        dispatch({type: 'USER_REGISTER_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}


export const loginUser = (user) => async (dispatch) => {
    dispatch({type: 'USER_LOGIN_REQUEST'});
    try {
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            })
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'USER_LOGIN_SUCCESS', payload: data.loginUser});
            localStorage.setItem('currentUser', JSON.stringify(data.loginUser));
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
            window.location.href = '/';
        }
        else {
            dispatch({type: 'USER_LOGIN_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }

    } catch(err) {
        dispatch({type: 'USER_LOGIN_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}


export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('currentUser');
    //localStorage.removeItem('cartItems');
    window.location.href = '/login';
}


export const getAllUsers = () => async (dispatch) => {
    dispatch({type: 'GET_USERS_REQUEST'});
    try {
        const res = await fetch('/getusers', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        dispatch({type: 'GET_USERS_SUCCESS', payload: data});
    } catch(err) {
        dispatch({type: 'GET_USERS_FAIL', payload: err});
        console.log(err);
    }

}


export const deleteUserFromDB = (user_id) => async (dispatch) => {
    dispatch({type: 'DELETE_USER_REQUEST'});
    try {
        const res = await fetch(`/deleteuser/${user_id}`, {
            method: "DELETE"
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'DELETE_USER_SUCCESS'});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
        else {
            dispatch({type: 'DELETE_USER_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
    } catch(err) {
        dispatch({type: 'DELETE_USER_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
    }
}



export const changeUserAdminStatus = (user_id) => async (dispatch) => {
    dispatch({type: 'CHANGE_USER_ADMIN_REQUEST'});
    try {
        const res = await fetch('/change-admin-status', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userID: user_id
            })
        });

        const data = await res.json();
        if(data.message) {
            dispatch({type: 'CHANGE_USER_ADMIN_SUCCESS'});
            dispatch({type: 'GET_USERS_SUCCESS', payload: data.finalAllUsers});
            toast.success(data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
        else {
            dispatch({type: 'CHANGE_USER_ADMIN_FAIL', payload: data.error});
            toast.error(data.error, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        }
    } catch(err) {
        dispatch({type: 'CHANGE_USER_ADMIN_FAIL', payload: err});
        toast.error(err, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
    }
}
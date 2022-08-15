export const registerUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                loading: true
            }

        case 'USER_REGISTER_SUCCESS':
            return {
                loading: false,
                success: true
            }

        case 'USER_REGISTER_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const loginUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                loading: true
            }

        case 'USER_LOGIN_SUCCESS':
            return {
                loading: false,
                success: true,
                currentUser: action.payload
            }

        case 'USER_LOGIN_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const getAllUsersReducer = (state = {users: []}, action) => {
    switch(action.type) {
        case 'GET_USERS_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }

        case 'GET_USERS_SUCCESS': {
            return {
                loading: false,
                success: true,
                users: action.payload
            }
        }

        case 'GET_USERS_FAIL': {
            return {
                loading: false,
                error: action.payload
            }
        }

        default: return state
    }
}


export const deleteUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'DELETE_USER_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }

        case 'DELETE_USER_SUCCESS': {
            return {
                loading: false,
                success: true,
            }
        }

        case 'DELETE_USER_FAIL': {
            return {
                loading: false,
                error: action.payload
            }
        }

        default: return state
    }
}


export const changeUserAdminStatusReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHANGE_USER_ADMIN_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }

        case 'CHANGE_USER_ADMIN_SUCCESS': {
            return {
                loading: false,
                success: true,
            }
        }

        case 'CHANGE_USER_ADMIN_FAIL': {
            return {
                loading: false,
                error: action.payload
            }
        }

        default: return state
    }
}
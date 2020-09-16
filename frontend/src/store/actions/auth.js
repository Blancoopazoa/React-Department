import axios from 'axios';
import * as actionType from './actionType';

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionType.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionType.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

//Crear Usuario Cliente
export const authSignup = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/empleados',{
            usuario: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}
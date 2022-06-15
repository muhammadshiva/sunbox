import { initializeApp } from 'firebase/app'
import firebaseConfig from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getDatabase,
    ref,
    set,
} from 'firebase/database'
import { Navigate } from 'react-router-dom';

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"


export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

export const VERIFY_REQUEST = "VERIFY_REQUEST"
export const VERIFY_SUCCESS = "VERIFY_SUCCESS"


const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const receiveLogin = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    }
}


const requestRegister = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const receiveRegister = () => {
    return {
        type: REGISTER_SUCCESS
    }
}

const registerError = () => {
    return {
        type: REGISTER_FAILURE
    }
}

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};


const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

const myFirebase = initializeApp(firebaseConfig)
const authInit = getAuth(myFirebase);
const databaseInit = getDatabase(myFirebase)

export const loginUser = (email, password) => (dispatch) => {
    dispatch(requestLogin)
    signInWithEmailAndPassword(authInit, email, password)
        .then(user => {
            dispatch(receiveLogin(user));
            alert('Welcome freelancer ' + user.user.email)
            return <Navigate to="/" replace={true} />
        })
        .catch(() => {
            //Do something with the error if you want!
            dispatch(loginError());
        });
}


export const registerUser = (username, email, password) => (dispatch) => {
    dispatch(requestRegister)
    createUserWithEmailAndPassword(authInit, email, password)
        .then(user => {
            dispatch(receiveRegister(user));
            set(ref(databaseInit, 'Users/' + username), 
            {
                username,
                email,
                role: 'member'
            })    
            alert('Your account has been created successfully')
            return <Navigate to="/" replace={true} />
        })
        .catch(() => {
            //Do something with the error if you want!
            dispatch(registerError());
        });
}

export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout());
    signOut(authInit)
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch((err) => {
            //Do something with the error if you want!
            console.log('err ', err)
            dispatch(logoutError());
        });
};

export const verifyAuth = () => (dispatch) => {
    dispatch(verifyRequest());
    onAuthStateChanged(authInit, user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    })
};
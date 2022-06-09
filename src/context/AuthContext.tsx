import React, { useContext, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';


// CONSTANTS 
const LOGIN = 'login';
const LOGOUT = 'logout';
const RELOAD = 'reload';

// ACTIONS 
const login = (payload: any) => {
	return {
		type: LOGIN,
		payload,
	};
};
const logout = (payload?: any) => {
	return {
		type: LOGOUT,
		payload,
	};
};
const reload = (payload?: any) => {
	return {
		type: RELOAD,
		payload,
	};
};

export const actions = {
	login,
	logout,
	reload,
}

// CONTEXT 
export const AuthContext = React.createContext({});

// REDUCER 
interface IAuthState {
	isAuth: boolean;
	username: String;
}
const initialState: IAuthState = {
	isAuth: false,
	username: "",
};

const reducer: any = (state: boolean, action: any) => {
	switch (action.type) {
		case LOGIN:
			Cookies.set('token', action.payload, { sameSite: 'strict', expires: 1 });
			const info: any = jwtDecode(action.payload)
			return {
				isAuth: true,
				username: info.sub,
			};
		case RELOAD:
			const token: any = Cookies.get('token');
			if (token) {
				const infoReload: any = jwtDecode(token)
				return {
					isAuth: true,
					username: infoReload.sub,
				};
			} else {
				return initialState;
			}
		case LOGOUT:
      Cookies.remove('token');
			return initialState;
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

// PROVIDER 
export const AuthProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(()=>{
		dispatch(actions.reload());
	},[])
	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{children}
		</AuthContext.Provider>
	);
};



// useContext hook - export here to keep code for global auth state
// together in this file, allowing user info to be accessed and updated
// in any functional component using the hook
export const useAuth: any = () => useContext(AuthContext);

import React, { useContext, useReducer } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';


// CONSTANTS 
const LOGIN = 'login';
const LOGOUT = 'logout';

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

export const actions = {
	login,
	logout,
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
		case LOGOUT:
      Cookies.remove('token');
			return initialState;
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

// PROVIDER 
export const AuthProvider = ({ children }: any) => {
	let localState: IAuthState = initialState ;
	if (Cookies.get("token")) {
		const token: any = Cookies.get('token');
		const info: any = jwtDecode(token);
		localState = {
			isAuth: true,
			username: info.sub,
		};
	}
	const [state, dispatch] = useReducer(reducer, localState || initialState);
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

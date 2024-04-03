import { createContext, useEffect, useReducer, useState } from 'react';

export const UserContext = createContext();
// const userReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'LOGOUT_USER':
// 			return {
// 				user: null,
// 			};
// 	}
// };
export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		refetch();
	});
	const refetch = async () => {
		try {
			const response = await fetch('/api/auth/refetch');
			const json = await response.json();
			if (json.username) {
				setUser(json);
			}
		} catch (error) {
			console.log(error);
		}
	};
	// const [state, dispatch] = useReducer(userReducer, {
	// 	user: user,
	// });
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

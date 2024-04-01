import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
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
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

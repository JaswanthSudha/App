import { createContext, useReducer } from 'react';
export const CommentContext = createContext();
const intialValue = {
	comments: [],
};
const CommentReducer = (state, action) => {
	switch (action.type) {
		case 'GET_COMMENTS':
			return {
				comments: action.payload,
			};
		case 'DELETE_COMMENT': {
			const comment = action.payload;
			const new_comments = state.comments.filter((element) => {
				return element._id != comment._id;
			});
			return {
				comments: new_comments,
			};
		}
		case 'UPDATE_COMMENT': {
			return {
				comments: action.payload,
			};
		}
	}
};
export const CommentContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CommentReducer, intialValue);
	return (
		<CommentContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CommentContext.Provider>
	);
};

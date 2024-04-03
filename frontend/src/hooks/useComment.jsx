import {useContext} from "react";
import {CommentContext} from "../context/CommentContext";
const useComment=()=>{
	const context=useContext(CommentContext);
	return context;
}
export default useComment;
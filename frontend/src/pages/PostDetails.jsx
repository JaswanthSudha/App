import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
// import image from '../images/image.png';
import Comment from '../components/Comment';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUser from '../hooks/useUser';
import useComment from '../hooks/useComment';
const PostDetails = () => {
	const params = useParams();
	const { comments, dispatch } = useComment();
	const [comment, setComment] = useState('');
	const { user } = useUser();
	const navigate = useNavigate();
	const [post, setPost] = useState({});
	useEffect(() => {
		fetchPost();
	});
	const handleAddComment = async () => {
		// console.log(user);
		const data = {
			comment,
			author: user.username,
			postId: params.id,
			userId: user.id,
		};
		setComment('');
		try {
			const response = await fetch('/api/comments/create', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const json = await response.json();
			if (json) {
				fetchComment();
			}
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};
	const handleDelete = async () => {
		try {
			const response = await fetch('/api/posts/' + params.id, {
				method: 'DELETE',
			});
			const json = await response.json();
			if (json) {
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchComment = async () => {
		try {
			const response = await fetch('/api/comments/post/' + post._id);
			const json = await response.json();

			// console.log(json)
			// setComments(json)
			dispatch({
				type: 'GET_COMMENTS',
				payload: json,
			});
			console.log(comments);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchPost = async () => {
		try {
			const response = await fetch('/api/posts/' + params.id);
			const json = await response.json();
			// console.log(json);
			if (json._id) {
				const response2 = await fetch('/api/comments/post/' + json._id);
				const json2 = await response2.json();
				setPost(json);
				dispatch({
					type: 'GET_COMMENTS',
					payload: json2,
				});
				// setComments(json2)
				// console.log(json._id)
			}
		} catch (error) {
			console.log(error);
		}
	};
	// console.log(post.categories);
	return (
		<div className='px-8 md:px-[200px] mt-8'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold text-black md:text-3xl'>
					{post.title}
				</h1>
				{post.userId === user?.id && (
					<div className='flex items-center justify-center space-x-2'>
						<p className='cursor-pointer'>
							<BiEdit onClick={() => navigate('/edit/' + post._id)} />
						</p>
						<p className='cursor-pointer'>
							<MdDelete onClick={handleDelete} />
						</p>
					</div>
				)}
			</div>
			<div className='flex items-center justify-between mt-2 md:mt-4'>
				<p>{post.username}</p>
				<div className='flex space-x-2'>
					<p>{new Date(post.createdAt).toString().slice(0, 15)}</p>
					<p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
				</div>
			</div>
			<img
				src={'/images/' + post.photo}
				className='w-full  mx-auto mt-8'
				alt=''
			/>
			<p className='mx-auto mt-8'>{post.desc}</p>
			<div className='flex items-center mt-8 space-x-4 font-semibold'>
				<p>Categories:</p>
				<div className='flex justify-center items-center space-x-2'>
					{post.categories?.map((e, index) => {
						return <h1 key={index}>{e.cat}</h1>;
					})}
				</div>
			</div>
			<div className='flex flex-col mt-4'>
				<h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>

				{comments.map((comment, index) => {
					return (
						<Comment
							key={index}
							author={comment.author}
							comment={comment.comment}
							updatedAt={comment.updatedAt}
							createdAt={comment.createdAt}
							id={comment._id}
						/>
					);
				})}
			</div>
			{/* write a comment */}
			<div className='w-full flex flex-col mt-4 md:flex-row'>
				<input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					type='text'
					placeholder='Write a comment'
					className='md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0'
				/>
				<button
					onClick={handleAddComment}
					className='bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0'>
					Add Comment
				</button>
			</div>
		</div>
	);
};

export default PostDetails;

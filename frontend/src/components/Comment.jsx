import { MdDelete } from 'react-icons/md';
import useUser from '../hooks/useUser';
import useComment from '../hooks/useComment';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useState } from 'react';

const Comment = ({ author, updatedAt, createdAt, comment, id }) => {
	// console.log(id)
	const { user } = useUser();
	const { dispatch } = useComment();
	const [update, setUpdate] = useState(false);
	const [value, setValue] = useState(comment);
	const handleUpdate = async () => {
		try {
			const response = await fetch('/api/comments/' + id, {
				method: 'PUT',
				body: JSON.stringify({ comment: value }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const json = await response.json();
			if (json) {
				const response2 = await fetch('/api/comments/post/' + json.postId);
				const json2 = await response2.json();
				dispatch({ type: 'UPDATE_COMMENT', payload: json2 });
			}
			// console.log(json);
		} catch (error) {
			console.log(error);
		}

		setUpdate(false);
	};

	const handleDeleteComment = async () => {
		try {
			const response = await fetch('/api/comments/' + id, {
				method: 'DELETE',
			});
			const json = await response.json();
			if (json) {
				dispatch({ type: 'DELETE_COMMENT', payload: json });
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='px-2 py-1 bg-gray-200 rounded-lg my-2'>
			<div className='flex items-center justify-between'>
				<h3 className='font-bold text-gray-600'>@{author}</h3>
				<div className='flex justify-center items-center space-x-4'>
					<p>{new Date(createdAt).toString().slice(0, 15)}</p>
					<p>{new Date(updatedAt).toString().slice(0, 15)}</p>
					<div className='flex items-center justify-between space-x-2'>
						{user.username == author && (
							<p className='cursor-pointer'>
								<MdDelete
									className='text-2xl'
									onClick={handleDeleteComment}
								/>
								<MdOutlineModeEdit
									onClick={() => setUpdate(!update)}
									className=' text-2xl'
								/>
							</p>
						)}
					</div>
				</div>
			</div>
			{!update ? (
				<p className='px-4 mt-2'>{comment}</p>
			) : (
				<>
					<input
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className='outline-none p-3 rounded-lg mr-2 shadow-lg'
						type='textarea'
					/>
					<button
						className='bg-black text-white p-4 py-2 rounded-lg shadow-sm'
						onClick={handleUpdate}>
						Update
					</button>
				</>
			)}
		</div>
	);
};

export default Comment;

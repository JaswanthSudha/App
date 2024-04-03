import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';

const EditPost = () => {
	const { user } = useUser();
	const params = useParams();
	const navigate = useNavigate();
	// console.log(params);
	const [cats, setCats] = useState([]);
	const [cat, setCat] = useState('');
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const handleUpdate = async (e) => {
		e.preventDefault();
		const post = {
			title,
			desc,
			username: user.username,
			userId: user.id,
			categories: cats,
		};
		// console.log(post);
		try {
			const response = await fetch('/api/posts/' + params.id, {
				method: 'PUT',
				body: JSON.stringify(post),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const json = await response.json();
			navigate('/posts/post/' + params.id);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {});
	const handleCategory = (e) => {
		setCat(e.target.value);
	};
	const handleAddCategory = () => {
		let index = cats.length;
		let newObj = { cat, index };
		setCats([newObj, ...cats]);
		setCat('');
	};
	return (
		<div className='px-6 md:px-[200px] mt-8'>
			<h1 className='font-bold md:text-2xl text-xl '>Edit Post</h1>
			<form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
				<input
					type='text'
					placeholder='Enter post title'
					className='px-4 py-2 outline-none'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type='file'
					className='px-4'
				/>
				<div className='flex flex-col'>
					<div className='flex items-center space-x-4 md:space-x-8'>
						<input
							value={cat}
							onChange={handleCategory}
							className='px-4 py-2 outline-none'
							placeholder='Enter post category'
							type='text'
						/>
						<div
							onClick={handleAddCategory}
							className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>
							Add
						</div>
					</div>

					{/* categories */}
					{cats.map((category) => {
						return (
							<div
								key={category.index}
								className='flex px-4 mt-3'>
								<div className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
									<p>{category.cat}</p>
									<p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'>
										<ImCross
											onClick={() => {
												const newCategory = cats.filter((element) => {
													return category.index !== element.index;
												});
												setCats(newCategory);
											}}
										/>
									</p>
								</div>
							</div>
						);
					})}

					{/* endCats */}
				</div>
				<textarea
					rows={15}
					cols={30}
					className='px-4 py-2 outline-none'
					placeholder='Enter post description'
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button
					onClick={handleUpdate}
					className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>
					Update
				</button>
			</form>
		</div>
	);
};

export default EditPost;

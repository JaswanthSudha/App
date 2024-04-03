import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const MenuBar = () => {
	const { user } = useUser();
	const handleLogout = async () => {
		try {
			const response = await fetch('/api/auth/logout');
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='flex flex-col bg-black w-[200px] absolute top-12  text-white  p-2 rounded-lg items-start right-6'>
			{!user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link to='/login'>Login</Link>
				</h3>
			)}
			{!user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link to='/register'>Register</Link>
				</h3>
			)}
			{user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link to={'/profile/' + user.id}>Profile</Link>
				</h3>
			)}
			{user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link to='/write'>Write</Link>
				</h3>
			)}
			{/* {user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link to='/myblogssr'>My Blogs</Link>
				</h3>
			)} */}
			{user && (
				<h3 className='text-lg hover:text-gray-500'>
					<Link
						onClick={handleLogout}
						to='/login'>
						LogOut
					</Link>
				</h3>
			)}
		</div>
	);
};

export default MenuBar;

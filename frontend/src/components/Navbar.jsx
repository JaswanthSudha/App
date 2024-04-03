import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import MenuBar from './MenuBar';
import useUser from '../hooks/useUser';
import MyBlogs from '../pages/MyBlogs';
import Profile from '../pages/Profile';
const Navbar = () => {
	const { user } = useUser();
	const navigate = useNavigate();
	const location = useLocation();
	const [input, setInput] = useState('');

	const [menu, setMenu] = useState(false);
	const handleMenu = () => {
		setMenu(!menu);
	};
	return (
		<div className='flex justify-between items-center px-6 md:px-[200px] py-4'>
			<h1 className='font-bold text-lg md:text-xl'>
				<Link to='/'>Blog Market</Link>
			</h1>
			<div className='flex  space-x-0 items-center justify-center md:space-x-4'>
				<IoSearchOutline onClick={() => navigate('?search=' + input)} />
				<input
					className='outline-none px-3'
					type='text'
					placeholder='Search a post'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
			<div className='hidden md:flex justify-between items-center space-x-2 md:space-x-4'>
				<h3>
					{user ? (
						<Link to='/write'>Write</Link>
					) : (
						<Link to='/login'>Login</Link>
					)}
				</h3>
				<div onClick={handleMenu}>
					<MdMenu />
					{menu && <MenuBar />}
				</div>
			</div>
			<div
				className='md:hidden text-lg'
				onClick={handleMenu}>
				<p>
					<MdMenu className='text-3xl' />
				</p>
				{menu && <MenuBar />}
			</div>
		</div>
	);
};

export default Navbar;

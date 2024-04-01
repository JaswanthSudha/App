import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { setUser } = useUser();
	const [message, setMessage] = useState(null);
	const handleLogin = async () => {
		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const json = await response.json();
			if (json.username) {
				setUser(json);
				navigate('/');
			} else {
				console.log(json);
				setMessage(json);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='w-full flex justify-center items-center h-[70vh]'>
			<div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
				<h1 className='text-xl font-bold text-left '>
					Login in to your account
				</h1>
				<input
					type='email'
					placeholder='Enter your email'
					className='w-full px-4 py-2 border-2 border-black origin-none'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type='password'
					placeholder='Enter your password'
					className='w-full px-4 py-2 border-2 border-black origin-none'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					onClick={handleLogin}
					className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounder-lg hover:bg-gray-200'>
					Login
				</button>
				{message && (
					<div className='bg-gray-100 shadow-md text-center rounded-lg w-full p-8 '>
						{' '}
						{message}
					</div>
				)}
				<div className='flex justify-center items-center space-x-3'>
					<p>New here?</p>
					<p>
						<Link to='/register'>Register</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;

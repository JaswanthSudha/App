import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(null);
	// const navigate = useNavigate();
	const [setError] = useState(null);
	const handleRegister = async () => {
		setMessage('');
		try {
			setMessage('');
			const response = await fetch('/api/auth/register', {
				method: 'POST',
				body: JSON.stringify({ username, password, email }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const json = await response.json();
			console.log(json);
			if (json.username) {
				setMessage('Registered Succefully');
			} else {
				setMessage('SomeThing Went Wrong');
			}
			setEmail('');
			setPassword('');
			setUserName('');
			setError(null);

			// navigate('/login');
		} catch (error) {
			setMessage('Some Error');
			setError(error);
		}
	};
	return (
		<div className='w-full flex justify-center items-center h-[70vh]'>
			<div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
				<h1 className='text-xl font-bold text-left '>Register Your Account</h1>
				<input
					type='text'
					placeholder='Enter your username'
					className='w-full px-4 py-2 border-2 border-black origin-none'
					value={username}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Enter your Email'
					className='w-full px-4 py-2 border-2 border-black origin-none'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Enter your password'
					className='w-full px-4 py-2 border-2 border-black origin-none'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					onClick={handleRegister}
					className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounder-lg hover:bg-gray-200'>
					Register
				</button>
				{message && (
					<div className='bg-gray-100 shadow-md text-center rounded-lg w-full p-8 '>
						{' '}
						{message}
					</div>
				)}

				<div className='flex justify-center items-center space-x-3'>
					<p>Already Registered?</p>
					<p>
						<Link to='/login'>Login</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;

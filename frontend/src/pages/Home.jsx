import React from 'react';
import HomePosts from '../components/HomePosts';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div className='flex flex-col'>
			<HomePosts />
			<HomePosts />
			<HomePosts />
		</div>
	);
};

export default Home;

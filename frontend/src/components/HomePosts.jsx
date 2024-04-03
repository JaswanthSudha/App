import React from 'react';
// import image from '../images/image.png';

const HomePosts = ({ image, title, username, created, updated, desc }) => {
	return (
		<div className='flex w-full mt-8 space-x-4'>
			{/* left */}
			<div className='w-[35%] h-[200px] flex justify-center items-center'>
				<img
					className='h-full w-full object-cover'
					src={'/images/' + image}
					alt='#'
				/>
			</div>
			{/* right */}
			<div className='flex flex-col w-[65%]'>
				<h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>{title}</h1>
				<div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
					<p>{username}</p>
					<div className='flex space-x-2 text-sm'>
						<p>{new Date(created).toString().slice(0, 15)}</p>
						<p>{new Date(updated).toString().slice(0, 15)}</p>
					</div>
				</div>
				<p className='text-sm md:text-lg'>{desc}</p>
			</div>
		</div>
	);
};

export default HomePosts;

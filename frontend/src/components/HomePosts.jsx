import React from 'react';
import image from '../images/image.png';

const HomePosts = () => {
	return (
		<div className='flex w-full mt-8 space-x-4'>
			{/* left */}
			<div className='w-[35%] h-[200px] flex justify-center items-center'>
				<img
					className='h-full w-full object-cover'
					src={image}
					alt=''
				/>
			</div>
			{/* right */}
			<div className='flex flex-col w-[65%]'>
				<h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>Title</h1>
				<div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
					<p>username</p>
					<div className='flex space-x-2 text-sm'>
						<p>Updated</p>
						<p>Posted</p>
					</div>
				</div>
				<p className='text-sm md:text-lg'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
					pariatur! Corrupti enim veniam ipsum velit nesciunt voluptatibus
					inventore placeat totam dolore mollitia in ullam expedita impedit
					voluptatum officia, ab unde Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Officiis delectus eum architecto maxime nulla
					nostrum veniam, officia provident deleniti ad ullam sunt itaque
					eligendi? Veritatis mollitia eveniet enim architecto eligendi.
				</p>
			</div>
		</div>
	);
};

export default HomePosts;

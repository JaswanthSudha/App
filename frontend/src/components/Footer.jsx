import React from 'react';

const Footer = () => {
	return (
		<>
			<div className='mt-8 w-full  px-8 md:px-[500px] md:flex-row flex-col space-y-6 md:space-y-0 items-center bg-black text-white flex justify-between'>
				<div className='flex flex-col text-white'>
					<p>Featured Blogs</p>
					<p>Most Viewed</p>
					<p>Readers Choice</p>
				</div>
				<div className='flex flex-col text-white'>
					<p>FOrum</p>
					<p>Support</p>
					<p>Recent Posts</p>
				</div>
				<div className='flex flex-col text-white'>
					<p>Privacy Policy</p>
					<p>About us</p>
					<p>Terms & Conditions</p>
					<p>Terms & Services</p>
				</div>
			</div>
			<p className='py-2 pb-2 text-center text-white bg-black'>
				All Rights Are Reserved
			</p>
		</>
	);
};

export default Footer;

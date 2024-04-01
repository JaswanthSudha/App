import image from '../images/image.png';
const ProfilePosts = ({ p }) => {
	// console.log(p)
	return (
		<div className='w-full flex mt-8 space-x-4'>
			{/* left */}
			<div className='w-[35%] h-[200px] flex justify-center items-center'>
				<img
					src={image}
					alt=''
					className='h-full w-full object-cover'
				/>
			</div>
			{/* right */}
			<div className='flex flex-col w-[65%]'>
				<h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
					"The King"
				</h1>
				<div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
					<p>@{'JaswanthSudha'}</p>
					<div className='flex space-x-2'>
						<p>23/412/124</p>
						<p>124.243/342</p>
					</div>
				</div>
				<p className='text-sm md:text-lg'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga
					harum placeat repellat deleniti sint ab consectetur similique dicta
					impedit omnis suscipit architecto, nobis cupiditate accusamus
					explicabo animi dolorum perferendis!loream Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Laudantium ab voluptatibus repudiandae
					modi ratione quisquam rerum voluptatum itaque pariatur molestiae
					architecto, magnam, dolore corrupti debitis error placeat? Voluptate,
					laudantium laboriosam?
				</p>
			</div>
		</div>
	);
};

export default ProfilePosts;

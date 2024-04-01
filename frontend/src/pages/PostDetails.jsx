import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import image from '../images/image.png';
import Comment from '../components/Comment';
const PostDetails = () => {
	return (
		<div className='px-8 md:px-[200px] mt-8'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold text-black md:text-3xl'>Detail</h1>
				<div className='flex items-center justify-center space-x-2'>
					<p className='cursor-pointer'>
						<BiEdit />
					</p>
					<p className='cursor-pointer'>
						<MdDelete />
					</p>
				</div>
			</div>
			<div className='flex items-center justify-between mt-2 md:mt-4'>
				<p>@Username</p>
				<div className='flex space-x-2'>
					<p>123/123/4</p>
					<p>234.4513/34</p>
				</div>
			</div>
			<img
				src={image}
				className='w-full  mx-auto mt-8'
				alt=''
			/>
			<p className='mx-auto mt-8'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
				saepe eligendi earum? Fuga, molestias maxime obcaecati ea consectetur
				tempora minima rem delectus, vel, suscipit quae! Blanditiis labore atque
				reprehenderit neque?Lorem ipsum dolor sit amet consectetur, adipisicing
				elit. Debitis, id odio commodi reprehenderit, iste voluptatem quis
				aspernatur ab voluptas non a esse ea ipsum cumque et at rerum quidem ad.
			</p>
			<div className='flex items-center mt-8 space-x-4 font-semibold'>
				<p>Categories:</p>
				<div className='flex justify-center items-center space-x-2'>
					Category1 Category-2
				</div>
			</div>
			<div className='flex flex-col mt-4'>
				<h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
				<Comment />
				<Comment />
			</div>
			{/* write a comment */}
			<div className='w-full flex flex-col mt-4 md:flex-row'>
				<input
					type='text'
					placeholder='Write a comment'
					className='md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0'
				/>
				<button className='bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0'>
					Add Comment
				</button>
			</div>
		</div>
	);
};

export default PostDetails;

import React, { useEffect, useState } from 'react';
import HomePosts from '../components/HomePosts';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Home = () => {
	const location = useLocation();
	const { user } = useUser();
	// console.log('the search', location.search);
	const search = location.search;
	const [posts, setPosts] = useState([]);
	const [noPosts, setNoPosts] = useState(false);
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		getPost();
	}, [search]);
	const getPost = async () => {
		setLoader(true);
		try {
			const response = await fetch('/api/posts/' + search);
			const json = await response.json();

			setPosts(json);
			if (json.length === 0) {
				setNoPosts(true);
			} else {
				setNoPosts(false);
			}
			setLoader(false);

			// console.log(json);
		} catch (error) {
			console.log(error);
			setLoader(false);
		}
	};
	return (
		<div className='flex flex-col h-[70%]'>
			{loader ? (
				<div className='flex justify-center items-center h-[30vh]'>
					{' '}
					<Loader />
				</div>
			) : !noPosts ? (
				posts.map((post, index) => {
					return (
						<Link
							key={index}
							to={user ? '/posts/post/' + post._id : '/login'}>
							<HomePosts
								title={post.title}
								image={post.photo}
								username={post.username}
								created={post.createdAt}
								updated={post.updatedAt}
								desc={post.desc}
							/>
						</Link>
					);
				})
			) : (
				<div className='text-xl font-bold text-center mt-16'>
					no posts available for {search.slice(8)}
				</div>
			)}
		</div>
	);
};

export default Home;

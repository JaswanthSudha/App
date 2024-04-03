import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import Loader from './components/Loader';
import MyBlogs from './pages/MyBlogs';
import useUser from './hooks/useUser';

const App = () => {
	const { user } = useUser();
	return (
		<div className=''>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{!user ? (
						<>
							{/* if User is Not Present  */}
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/'
								element={<Login />}
							/>
							<Route
								path='/register'
								element={<Register />}
							/>
						</>
					) : (
						<>
							{/* If User Present */}
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/register'
								element={<Register />}
							/>
							<Route
								element={<Home />}
								path='/'
							/>

							<Route
								path='/posts/post/:id'
								element={<PostDetails />}
							/>

							<Route
								path='/write'
								element={<CreatePost />}
							/>
							<Route
								path='/edit/:id'
								element={<EditPost />}
							/>
							<Route
								path='/profile/:id'
								element={<Profile />}
							/>
							<Route
								path='/loader'
								element={<Loader />}
							/>
							<Route
								path='/myblogs'
								element={<MyBlogs />}
							/>
						</>
					)}
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
};
export default App;
// const App = () => {
// 	const [file, setFile] = useState(null);
// 	async function handleUpload() {
// 		try {
// 			const form = new FormData();
// 			form.append('file', file);
// 			await axios.post('/image/upload', form);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	return (
// 		<div>
// 			<input
// 				type='file'
// 				onChange={(e) => setFile(e.target.files[0])}
// 			/>
// 			<button onClick={handleUpload}>Upload</button>
// 		</div>
// 	);
// };
// export default App;

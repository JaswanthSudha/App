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
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					element={<Home />}
					path='/'
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
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
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};
export default App;

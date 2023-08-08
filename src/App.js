import React from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Details from './pages/Details';

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			errorElement: <h1>page not found!!☹️</h1>,
			children: [
				{
					path: '/',
					element: <Body />,
				},
				{
					path: '/searchpage/:search',
					element: <SearchPage />,
				},
				{
					path: '/details/:name',
					element: <Details />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;

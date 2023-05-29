// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './js/contexts/AuthContext';
const Layout = lazy(() => import(/* webpackChunkName: "CoreLayout" */ './js/Layouts/Layout'));
const Home = lazy(
	() => import(/* webpackChunkName: "AdminPage" */ './js/Home')
);
const Homepage = lazy(
	() => import(/* webpackChunkName: "AdminPage" */ './js/Homepage')
);
const Login = lazy(() => import(/* webpackChunkName: "Login" */ './js/Auth/Login'));

export default function MyRouter() {
	const { user } = useContext(AuthContext);
	const router = createBrowserRouter([
		{
			element: (
				<Suspense fallback={<>...</>}>
					<Layout />
				</Suspense>
			),
			children: [
				{
					path: '',
					element: user ? (
						<Suspense fallback={<>...</>}>
							<Homepage />
						</Suspense>
					) : (
						<Suspense fallback={<>...</>}>
							<Home />
						</Suspense>
					),
				},
				{
					path: 'login',
					element: (
						<Suspense fallback={<>...</>}>
							<Login />
						</Suspense>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

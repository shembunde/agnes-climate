import { Route, Routes } from 'react-router-dom';
import Home from './app/home';

function App() {
	return (
		<Routes>
			<Route
				{...{
					Component: Home,
					path: '/',
				}}>
				<></>
			</Route>
		</Routes>
	);
}

export default App;

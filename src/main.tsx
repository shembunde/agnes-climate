import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { RootLayout } from './components/dev/core.tsx';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RootLayout>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RootLayout>
	</StrictMode>
);

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});

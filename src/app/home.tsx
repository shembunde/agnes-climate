import { Footer, Header, Inquiry, Resources } from '@/components/dev/core';

export default function Home() {
	return (
		<div className='overflow-hidden w-full'>
			<div className='w-full'>
				<Header />
			</div>

			<div className='w-full'>
				<Inquiry />
			</div>

			<div className='px-8 w-full'>
				<Resources />
			</div>

			<div className='w-full'>
				<Footer />
			</div>
		</div>
	);
}

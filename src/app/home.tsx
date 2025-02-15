import { Footer, Header, Inquiry, Resources } from '@/components/dev/core';

export default function Home() {
	return (
		<div className=''>
			<div className=''>
				<Header />
			</div>

			<div className=''>
				<Inquiry />
			</div>

			<div className='px-8'>
				<Resources />
			</div>

			<div className=''>
				<Footer />
			</div>
		</div>
	);
}

import {
	ClimateActionCard,
	CustomBadge,
	ImageComponent2,
	ResourceCard,
	ShareLinkButton,
	SocialLinks,
} from '@/components/dev/core';
import { Separator } from '@/components/ui/separator';
import { CLIMATE_ACTION } from '@/utils/constants';

export default function ResourcesPage() {
	const resource = {
		imgSrc: '/images/farmer-lady-2.png',
		active: true,
		date: new Date(),
		description: `The impacts of climate change are no longer abstract, and for far too many communities, particularly women, the consequences are immediate and devastating. This is more than a technical issue; it’s a moral crisis. We cannot separate climate action from the pursuit of gender equality.`,
		introduction:
			'The outcomes of the 28th Conference of Parties to the United Nations Framework Convention on Climate Change (UNFCCC, COP28) marked significant progress in operationalizing the Global Goal on Adaptation (GGA). At COP28, parties established the UAE Framework for Global Climate Resilience (UAE-GFCR), which outlines seven thematic and four dimensional targets for the GGA, with timelines for achievement ranging between 2027 and 2030 and beyond (UNFCCC, 2023, (2/CMA5) paragraphs 9 and 10). The framework also defined a pathway toward establishing indicators for measuring progress through a two-year work programme, dubbed the UAE-Belém work programme (UNFCCC, 2023, (2/CMA5) paragraph 39). The outcome of the first Global Stocktake underscored existing gaps in assessments of climate adaptation, reinforcing the need for concerted efforts to define systematic methodologies and guidelines for measuring the adequacy and effectiveness of adaptation (UNFCCC, 2023, (1/CMA5) paragraph 48). Building on these momentous COP28 decisions, at the 60th session of the Subsidiary Bodies of the UNFCCC (SB60), parties further defined modalities for the UAE-Belém work programme on indicators, emphasizing the necessity of expert engagement. Additionally, the draft conclusions of SB60 established criteria for mapping existing indicators, providing a robust foundation for the GGA framework. This approach helps identify existing gaps, thus informing efforts to develop new indicators. ',
		tag: [
			{
				color: 'agnes-blue',
				type: 'Energy',
			},
			{
				color: 'agnes-blue-purple',
				type: 'Research',
			},
		],
		title: `Call for Gender Considerations in Climate Action: Message to African Leaders at COP 29`,
	};

	return (
		<div className='mb-[70px] flex h-full w-full flex-col space-y-10 px-4 md:px-5 xl:px-40'>
			<div className='mt-10 flex w-full flex-col items-center space-y-6 text-center'>
				<p className='text-xs font-medium leading-4 text-placeholder md:text-sm'>
					{resource.date.toLocaleString('en-US', {
						month: 'short',
						day: '2-digit',
						year: 'numeric',
					})}
				</p>
				<p className='text-lg font-bold leading-7 md:text-2xl md:leading-9'>
					{resource.title}
				</p>
				<p className='text-[20px] font-[400] leading-[30px] text-bodytext'>
					As African leaders and negotiators come together at COP 29, we stand
					at a critical juncture.
				</p>
				<div className='flex flex-wrap justify-center gap-3'>
					{resource.tag.map((item, index) => (
						<CustomBadge
							key={index}
							className={`text-${item.color} font-medium`}>
							{item.type}
						</CustomBadge>
					))}
				</div>
			</div>

			{/* Image Section */}
			<div className='w-full'>
				<ImageComponent2
					className='h-auto max-h-[500px] w-full object-cover md:max-h-[700px]'
					{...{ src: resource.imgSrc }}
				/>
			</div>

			{/* Content Section */}
			<div className='flex flex-col gap-[64px] md:flex-row'>
				<ResourceCard />
				<div className='space-y-10'>
					<p className='text-[16px] font-[400px] leading-[28px] text-bodytext'>
						{resource.description}
					</p>
					<Separator className='h-[1px] stroke-gray-300' />
					<p className='text-lg font-semibold md:text-2xl'>Introduction</p>
					<p className='text-[16px] font-[400px] leading-[28px] text-bodytext'>
						{resource.introduction}
					</p>
					<div className='border-l-[7px] border-agnes-blue p-4 font-poppins text-[24px] font-[500] italic leading-[36px]'>
						<p>
							Adaptation remains a top priority in Africa's climate activism,
							given its high vulnerability to climate change despite negligible
							emissions.
						</p>
					</div>
					<p className='text-[24px] font-[600] leading-[36px]'>
						Progress made to define a framework for measuring progress in the
						GGA
					</p>
					<p className='leading-[28px]text-bodytext text-[16px] font-[400px]'>
						Pharetra morbi libero id aliquam elit massa integer tellus. Quis
						felis aliquam ullamcorper porttitor.
					</p>

					{/* Second Image */}
					<div className='w-full'>
						<ImageComponent2
							className='h-auto max-h-[400px] w-full object-cover md:max-h-[600px]'
							{...{ src: '/images/irrigation.png' }}
						/>
					</div>

					{/* Conclusion */}
					<p className='text-lg font-semibold md:text-2xl'>Conclusion</p>
					<p className='text-[16px] font-[400] leading-[28px] text-bodytext'>
						Looking ahead beyond the workshop, technical experts could also
						contribute to the work programme by developing detailed
						methodologies for tracking GGA indicators...
					</p>

					<Separator className='h-[1px] stroke-gray-300' />

					<div className='flex flex-wrap justify-center gap-5'>
						<ShareLinkButton />
						<SocialLinks />
					</div>
				</div>
			</div>

			{/* More Resources Section */}
			<div className='flex flex-wrap items-center justify-between'>
				<p className='text-lg font-medium md:text-xl'>More Resources</p>
				<p className='text-sm underline md:text-base'>See All</p>
			</div>
			<Separator className='h-0.5 stroke-gray-300' />

			<div className='grid grid-cols-1 justify-center sm:justify-start gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{CLIMATE_ACTION.slice(0, 3).map((item, key) => (
					<ClimateActionCard
						key={`action-${key}`}
						{...{ ...item, active: true }}
					/>
				))}
			</div>
		</div>
	);
}

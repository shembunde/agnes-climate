import {
	ALL_FILTERS,
	CLIMATE_ACTION,
	FILTERS,
	FOOTER_LINKS,
	HEADER_LINKS,
	SUGGESTED_QUERIES,
} from '@/utils/constants';
import { Link } from 'react-router-dom';
import {
	TBadgeFilter,
	TChildNode,
	TClassName,
	TClimateCard,
	TFilterBadge,
	TFilterProps,
	TFiltersListed,
	TImageProps,
	TLinkProps,
	TPageProps,
	TReusableAccordion,
	TSearchProps,
	TSingleContactProps,
	TSingleSuggestedQueryProps,
	TTitle,
	TTitleIconProps,
} from '../../types';
import { Input } from '../ui/input';

import { cn } from '@/lib/utils';
import {
	ArrowLeftIcon,
	ArrowRight,
	ChevronDown,
	ChevronRight,
	Clock2Icon,
	FilterIcon,
	MailIcon,
	MapIcon,
	Paperclip,
	PhoneCall,
	SearchIcon,
	SendHorizonal,
} from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';

export const Banner = () => {
	return (
		<div className='w-full h-[244.8px] bg-[url(/images/Background.png)] flex items-center justify-start bg-cover'>
			<p className='font-bold text-4xl lg:text-5xl leading-[48px] text-white pl-2 md:pl-16 lg:pl-24 font-poppins'>
				A.I Powered Resource Library✨
			</p>
		</div>
	);
};

export const ReusableNavTree = ({ title, href, children }: TLinkProps) => {
	return (
		<div className='w-fit'>
			<Link
				className='flex gap-1 items-center'
				{...{
					to: href ?? '',
				}}>
				{title}
				{children && children?.length > 0 && (
					<ChevronDown className='w-4 h-4 font-bold' />
				)}
			</Link>
		</div>
	);
};

export const ImageComponent = ({ className, ...props }: TImageProps) => {
	return (
		<div className='w-fit h-auto'>
			<img {...props} />
		</div>
	);
};

export const Humbugger = () => {
	return (
		<div className='right-1 flex flex-col gap-1 fixed top-8 lg:hidden items-center z-50'>
			<p className='w-9 h-1 bg-black rounded-lg'></p>
			<p className='w-9 h-1 bg-black rounded-lg'></p>
			<p className='w-9 h-1 bg-black rounded-lg'></p>
		</div>
	);
};

export const TopNavbar = () => {
	return (
		<div className='h-[103px] bg-white w-full flex relative'>
			<div className='flex items-center justify-start gap-5 pl-2 lg:pl-40 lg:pr-40 w-full'>
				<ImageComponent
					{...{
						className: 'w-[236px] h-[78px]',
						src: '/images/logo.svg',
					}}
				/>

				<div className='justify-between items-center gap-4 hidden lg:flex'>
					{HEADER_LINKS.map((item, key) => (
						<ReusableNavTree {...item} key={`link-${key}`} />
					))}
				</div>
			</div>

			<Humbugger />
		</div>
	);
};

export const Header = () => {
	return (
		<div className='w-full'>
			<TopNavbar />

			<Banner />
		</div>
	);
};

export const FilterTag = ({ title }: TTitle) => {
	return (
		<div className='rounded-b-md py-1.5 px-3 flex gap-2.5 bg-gray-100'>
			{title}
		</div>
	);
};

export const CustomBadge = ({
	children,
	className,
}: TChildNode & Partial<TClassName>) => {
	return (
		<div
			className={cn(
				'bg-agnes-light-blue px-2 py-1 flex gap-1 items-center justify-center rounded-[25px] text-agnes-blue',
				className
			)}>
			{children}
		</div>
	);
};

export const ClimateActionCard = ({
	description,
	imgSrc,
	tag,
	date,
	title,
}: TClimateCard) => {
	return (
		<div className='border-1 max-w-[330px] min-w-72 min-h-80 rounded-xl bg-white border-gray-100 shadow-soft-depth overflow-clip'>
			{imgSrc && (
				<div className='w-full h-fit'>
					<ImageComponent
						className='object-contain rounded-2xl h-[260px]'
						{...{
							src: imgSrc,
						}}
					/>
				</div>
			)}

			<div className='flex gap-4 p-4 flex-col'>
				<div className='flex gap-1 flex-col'>
					<div className='flex gap-3 items-center'>
						<CustomBadge className=''>{tag}</CustomBadge>
						<p className='text-placeholder text-center leading-4 text-xs font-medium'>
							{date.toLocaleString('en-US', {
								month: 'short',
								day: '2-digit',
								year: 'numeric',
							})}
						</p>
					</div>

					<div className='flex justify-start'>
						<p className='font-semibold font-poppins leading-8 text-[20px]'>
							{title}
						</p>
					</div>

					<div className='flex justify-start'>
						<p className='text-placeholder leading-6 text-sm font-normal font-poppins'>
							{description.substring(0, 100)}...
						</p>
					</div>

					<div className='flex justify-between text-gray-800'>
						<button className='flex items-center justify-center bg-gray-100 rounded-lg p-2 gap-2'>
							<p className='font-poppins font-medium leading-4 text-sm'>
								Read More
							</p>
							<ArrowRight className='w-4 h-4' />
						</button>

						<div className=''>
							<img
								className='w-6 h-6 cursor-pointer'
								title='Summarize with AI'
								src='/icons/ai.svg'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Search = ({
	iconWrapperClass = '',
	className = '',
	placeholder,
	children,
}: TSearchProps) => {
	return (
		<div className='w-full relative'>
			<Input
				className={cn(
					'bg-white font-medium border flex rounded-full justify-between placeholder:font-normal placeholder:text-[18px] placeholder:leading-7 placeholder:text-[var(--placeholder-text)] border-[var(--border-color)] shadow-soft-depth w-full',
					className
				)}
				{...{
					placeholder,
				}}
			/>

			<div
				className={cn(
					'absolute right-6 top-[calc(calc(100%-32px)/2)] flex gap-6 items-center justify-center',
					iconWrapperClass
				)}>
				{children}
			</div>
		</div>
	);
};

export const SingleSuggestedInquiry = ({
	img,
	desc,
}: TSingleSuggestedQueryProps) => {
	return (
		<div className='border border-gray-100 flex gap-2 p-2 w-full lg:px-1 lg:w-[220px] max-w-full h-14 bg-white rounded-xl items-center shadow-soft-depth'>
			<div className='w-fit'>
				<ImageComponent
					{...{
						className: 'w-full h-auto',
						src: img,
					}}
				/>
			</div>
			<div className='font-normal text-[14px] leading-[18px] text-gray-400'>
				{desc}
			</div>
		</div>
	);
};

export const SuggestedInquiries = () => {
	return (
		<div className='flex gap-2 flex-col lg:flex-row lg:gap-9 items-center px-4 lg:px-0'>
			{SUGGESTED_QUERIES.map((props, index) => (
				<SingleSuggestedInquiry {...props} key={`suggestion-${index}`} />
			))}
		</div>
	);
};

export const FilterBadge = ({ Icon, onClick, title }: TFilterBadge) => {
	return (
		<div
			className='flex gap-2 py-[6px] px-3 rounded-md bg-agnes-blue cursor-pointer items-center justify-center w-fit
			'
			{...{
				onClick,
			}}>
			{Icon && <Icon className='stroke-white w-4 h-4' />}
			<p className='text-white font-medium text-sm leading-6 '>{title}</p>
		</div>
	);
};

export const BadgeFilters = ({ active, onClick, title }: TBadgeFilter) => {
	return (
		<div
			className={cn(
				'flex gap-2 py-[6px] px-3 rounded-md cursor-pointer items-center justify-center selection-none text-dark font-poppins w-auto select-none',
				active ? 'bg-agnes-blue text-white' : 'bg-gray-100 text-gray-800'
			)}
			{...{
				onClick,
			}}>
			<p className='text-inherit font-medium text-sm leading-6 w-auto'>
				{title}
			</p>
		</div>
	);
};

export const Inquiry = () => {
	return (
		<div className='flex px-2 gap-6 py-32 sm:py-36 md:py-48 lg:py-64 flex-col w-full lg:w-2/3 m-auto'>
			<p className='font-semibold leading-14 text-center text-gray-700 text-2xl lg:text-4xl'>
				What would you like to know?
			</p>

			<Search
				{...{
					children: (
						<>
							<Paperclip
								className='w-8 hidden lg:block h-8 cursor-pointer stroke-gray-400'
								{...{}}
							/>
							<SendHorizonal
								className='stroke-agnes-blue w-8 h-8 cursor-pointer'
								{...{}}
							/>
						</>
					),
					placeholder:
						'Got a question about climate or sustainability? Ask away!',

					className: 'w-full h-[70px] py-2 px-4 pr-14 lg:py-5 lg:px-8 lg:pr-28',
				}}
			/>

			<SuggestedInquiries />
		</div>
	);
};

export const RootLayout = ({ children }: Partial<TChildNode>) => {
	return <div className='w-screen h-screen bg-background'>{children}</div>;
};

export const OneFilter = ({
	className,
	onClick,
	title,
	selected,
}: TFilterProps) => {
	return (
		<div
			className={cn(
				'flex gap-2 p-1 rounded-lg cursor-pointer select-none font-poppins',
				className,
				selected ? 'bg-gray-100' : ''
			)}
			{...{ onClick }}>
			<Checkbox />
			<p
				className={cn(
					'leading-5 text-xs font-poppins',
					selected ? 'text-placeholder' : 'text-bodytext'
				)}>
				{title}
			</p>
		</div>
	);
};

export const ReusableAccordionComponent = ({
	accordionItemValue,
	defaultValue = '',
	content,
	title,
}: TReusableAccordion) => (
	<Accordion {...{ collapsible: true, type: 'single', defaultValue }}>
		<AccordionItem
			{...{
				value: accordionItemValue,
			}}>
			<AccordionTrigger className='w-full [&[data-state=open]_svg]:rotate-180'>
				{title}
			</AccordionTrigger>

			<AccordionContent className='pb-4'>{content}</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export const ReusableAdvancedSubSection = ({
	options,
	title,
}: TFiltersListed) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='w-full'>
				<Separator className='' />
			</div>

			<div className='w-full'>
				<ReusableAccordionComponent
					{...{
						accordionItemValue: '',
						className: ' font-semibold text-[12.36px] leading-5',
						title,
						content: (
							<div className='flex flex-col gap-2'>
								{options.map((item, key) => (
									<OneFilter {...item} key={`one-filter-${key}`} />
								))}
							</div>
						),
					}}
				/>
			</div>
		</div>
	);
};

export const AdvancedFilter = () => {
	return (
		<div className='px-4 py-3 border-r-[1.5px] flex gap-6 flex-col bg-white border-gray-300 shadow-soft-depth col-span-2 lg:col-span-1 h-fit'>
			<div className='w-full'>
				<FilterUnderFilter />
			</div>

			{ALL_FILTERS.map((item, key) => (
				<ReusableAdvancedSubSection {...item} key={`all-filters-${key}`} />
			))}
		</div>
	);
};

export const BreadCrumbFilters = () => {
	return (
		<div className='flex gap-11 overflow-auto py-2 items-center'>
			{FILTERS.map((item, key) => (
				<BadgeFilters {...item} key={`filter-${key}`} />
			))}
		</div>
	);
};

export const ResultsWrapper = () => {
	return (
		<div className='col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 flex gap-2 flex-col items-center'>
			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-4 lg:gap-y-14'>
				{CLIMATE_ACTION.map((item, key) => (
					<ClimateActionCard {...item} key={`action-${key}`} />
				))}
			</div>

			<ReusablePagination />
		</div>
	);
};

export const SinglePaginationPage = ({ active, page }: TPageProps) => {
	return (
		<div
			className={cn(
				'px-4 md:px-5 py-[1px] cursor-pointer select-none',
				active ? 'text-agnes-blue' : ''
			)}>
			<p className='leading-6 text-sm md:text-lg font-normal'>{page}</p>
		</div>
	);
};

export const ReusablePagination = () => {
	return (
		<div className='flex gap-1 bg-white border rounded-lg px-[1px] py-3 border-border-color-darker shadow-soft-depth w-fit'>
			{Array(4)
				.fill(0)
				.map((_, key) => (
					<div className='flex gap-1 items-center' key={key}>
						<SinglePaginationPage
							{...{ active: true, page: `${key + 1}` }}
							key={`page-${key}`}
						/>
						<p>|</p>
					</div>
				))}

			<SinglePaginationPage
				{...{
					active: false,
					page: '...',
				}}
			/>
			<SinglePaginationPage
				{...{
					active: false,
					page: 'Last',
				}}
			/>
		</div>
	);
};

export const Resources = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col gap-1'>
				<p className='font-medium text-[22px] leading-8 text-gray-700'>
					Resources
				</p>

				<Separator className='stroke-gray-300 h-0.5' />
			</div>

			<div className='flex flex-col gap-2'>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-between py-4'>
					<div className='w-fit grid-cols-1'>
						<FilterBadge
							{...{
								onClick: () => {
									console.log('Filtering');
								},
								Icon: FilterIcon,
								title: 'Filter',
							}}
						/>
					</div>

					<div className='col-span-3'>
						<BreadCrumbFilters />
					</div>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-8 items-center md:items-start'>
					<AdvancedFilter />

					<ResultsWrapper />
				</div>
			</div>
		</div>
	);
};

export const TitleWithIcon = ({
	Icon,
	title,
	className = '',
}: TTitleIconProps) => {
	return (
		<div className='flex items-center justify-between'>
			<p
				className={cn(
					'font-medium text-base leading-5 text-gray-800 select-none text-dark font-poppins',
					className
				)}>
				{title}
			</p>

			<div className='flex gap-2 items-center justify-center cursor-pointer select-none'>
				<Icon className='w-6 h-6 stroke-gray-800' />
			</div>
		</div>
	);
};

export const FilterUnderFilter = () => {
	return (
		<div className='flex flex-col gap-4 w-full'>
			<div className=''>
				<TitleWithIcon {...{ Icon: ArrowLeftIcon, title: 'Filter results' }} />
			</div>

			<div className='w-full'>
				<Search
					{...{
						placeholder: 'Search for Resource',
						children: (
							<SearchIcon className='w-6 h-6 stroke-agnes-blue cursor-pointer' />
						),
						iconWrapperClass: 'top-[calc(calc(100%-24px)/2)] right-3',
						className: 'w-full',
					}}
				/>
			</div>
		</div>
	);
};

export const FooterSectionBlueprint = ({
	children,
	className,
}: TChildNode & Partial<TClassName>) => {
	return (
		<div
			className={cn(
				'flex gap-2 flex-col w-[400px] justify-between text-footer-text',
				className
			)}>
			{children}
		</div>
	);
};

export const FooterContactInfo = ({
	Icon,
	className,
	title,
}: TSingleContactProps) => {
	return (
		<div className={cn('flex items-center gap-4 py-1', className)}>
			<Icon className='w-5 h-5 stroke-agnes-blue' />
			<p className='leading-7 text-base font-normal'> {title}</p>
		</div>
	);
};

export const FooterLink = ({
	title,
	href,
}: Required<Pick<TLinkProps, 'href' | 'title'>>) => {
	return (
		<Link className='w-fit flex gap-2 items-center' to={href}>
			<ChevronRight className='stroke-agnes-blue w-5 h-5' />
			<p className='text-base font-normal leading-7 text-footer-text'>
				{title}
			</p>
		</Link>
	);
};

export const CopyRights = () => {
	return (
		<div className='h-[100px] bg-agnes-blue flex items-center justify-center'>
			<p className='text-footer-text leading-9 text-base font-normal text-center'>
				© Copyright 2024 AGNES Africa. Powered by 
			</p>
		</div>
	);
};

export const Footer = () => {
	return (
		<div className='w-full h-[400px]'>
			<div className='flex gap-6 flex-wrap items-center justify-center bg-footer-bg py-10'>
				<FooterSectionBlueprint
					{...{
						children: (
							<>
								<ImageComponent {...{ src: '/images/logo.svg' }} />
								<p className='font-normal text-base leading-7'>
									The AGNES was created in 2015 to provide scientific expertise
									and evidence to inform a common African position in climate
									change negotiations.
								</p>

								<div className=''>Socials</div>
							</>
						),
					}}
				/>

				<FooterSectionBlueprint
					{...{
						className: 'gap-6',
						children: (
							<>
								<p className='leading-8 font-bold text-2xl text-white'>
									Contact Info
								</p>

								<div className='w-full'>
									<FooterContactInfo
										{...{
											Icon: MapIcon,
											title:
												'Blue Violet Plaza, 5th Floor, Suite No 507, Kindaruma Road Kilimani,Nairobi, Kenya',
										}}
									/>
									<FooterContactInfo
										{...{
											title: '+254 705 742 836',
											Icon: PhoneCall,
										}}
									/>
									<FooterContactInfo
										{...{
											title: 'info@agnesafrica.org',
											Icon: MailIcon,
										}}
									/>
									<FooterContactInfo
										{...{
											title: '+254 705 742 836',
											Icon: MailIcon,
										}}
									/>

									<FooterContactInfo
										{...{
											title: '08:00 - 17:00',
											Icon: Clock2Icon,
										}}
									/>
								</div>
							</>
						),
					}}
				/>

				<FooterSectionBlueprint
					{...{
						children: (
							<>
								<p className='font-bold font-poppins leading-8 text-2xl text-white'>
									Quick Links
								</p>

								<div className='flex flex-col gap-2'>
									{FOOTER_LINKS.map((item, key) => (
										<FooterLink {...item} key={`footer-link-${key}`} />
									))}
								</div>
							</>
						),
					}}
				/>
			</div>
			<CopyRights />
		</div>
	);
};

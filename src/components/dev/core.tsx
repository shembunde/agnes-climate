import {
	ALL_FILTERS,
	CLIMATE_ACTION,
	FILTERS,
	HEADER_LINKS,
} from '@/utils/constants';
import { Link } from 'react-router-dom';
import {
	TBadgeFilter,
	TChildNode,
	TClimateCard,
	TFilterBadge,
	TFilterProps,
	TFiltersListed,
	TImageProps,
	TLinkProps,
	TPageProps,
	TSearchProps,
	TTitle,
	TTitleIconProps,
} from '../../types';
import { Input } from '../ui/input';

import { cn } from '@/lib/utils';
import {
	ArrowLeftIcon,
	ArrowRight,
	ChevronDown,
	FilterIcon,
	Paperclip,
	SearchIcon,
	SendHorizonal,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';

export const Banner = () => {
	return (
		<div className='w-full h-[244.8px] bg-[url(/images/Background.svg)] flex items-center justify-center'>
			<p className='font-bold text-12 lead-[56px] text-white'>
				A.I Powered Resource Library✨
			</p>
		</div>
	);
};

export const ReusableNavTree = ({ title, children, href }: TLinkProps) => {
	return (
		<div className='w-fit'>
			<Link
				className=''
				{...{
					to: href ?? '',
				}}>
				{title}
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

export const TopNavbar = () => {
	return (
		<div className='h-[103px] bg-white w-full flex'>
			<div className='flex items-center justify-start gap-5 pl-40 pr-40 w-full'>
				<ImageComponent
					{...{
						className: 'w-[236px] h-[78px]',
						src: '/images/logo.svg',
					}}
				/>

				<div className='flex justify-between items-center gap-1'>
					{HEADER_LINKS.map((item, key) => (
						<ReusableNavTree {...item} key={`link-${key}`} />
					))}
				</div>
			</div>
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

export const ClimateActionCard = ({
	description,
	imgSrc,
	tag,
	date,
	title,
}: TClimateCard) => {
	return (
		<div className='border-1 max-w-[330px] min-w-72 min-h-80 rounded-xl bg-white border-gray-100 shadow-elevated overflow-clip'>
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
						<Badge className='bg-agnes-blue px-2 py-1 flex gap-1 items-center justify-center rounded-[25px] bg-agnes-blue/4 text-agnes-blue'>
							{tag}
						</Badge>
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
							<img src='/icons/ai.svg' className='w-6 h-6' />
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
					'bg-white font-medium border flex rounded-full justify-between placeholder:font-normal placeholder:text-[18px] placeholder:leading-7 placeholder:text-[var(--placeholder-text)] border-[var(--border-color)] shadow-elevated w-full',
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

export const SingleSuggestedInquiry = () => {
	return (
		<div className='border border-gray-100 flex gap-2 p-2 w-[220px] h-[52px] bg-white rounded-xl'>
			<div className=''>Icon</div>
			<div className='font-normal text-[14px] leading-[18px] text-gray-400'>
				Gender & climate change vulnerability in Africa
			</div>
		</div>
	);
};

export const SuggestedInquiries = () => {
	return (
		<div className='flex gap-9'>
			{Array(4)
				.fill(0)
				.map((_, index) => (
					<SingleSuggestedInquiry {...{}} key={`suggestion-${index}`} />
				))}
		</div>
	);
};

export const FilterBadge = ({ Icon, onClick, title }: TFilterBadge) => {
	return (
		<div
			className='flex gap-2 py-[6px] px-3 rounded-md bg-agnes-blue cursor-pointer items-center justify-center
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
				'flex gap-2 py-[6px] px-3 rounded-md cursor-pointer items-center justify-center selection-none text-dark font-poppins',
				active ? 'bg-agnes-blue text-white' : 'bg-gray-100 text-gray-800'
			)}
			{...{
				onClick,
			}}>
			<p className='text-inherit font-medium text-sm leading-6 '>{title}</p>
		</div>
	);
};

export const Inquiry = () => {
	return (
		<div className='flex gap-6 pt-64 pb-64 flex-col w-2/3 m-auto'>
			<p className='font-semibold leading-14 text-center text-gray-700 text-4xl'>
				What would you like to know?
			</p>

			<Search
				{...{
					children: (
						<>
							<Paperclip
								className='w-8 h-8 cursor-pointer stroke-gray-400'
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

					className: 'w-full h-[70px] py-5 px-8 pr-28',
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

export const ReusableAdvancedSubSection = ({
	options,
	title,
}: TFiltersListed) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='w-full'>
				<Separator className='' />
			</div>

			<div className=''>
				<TitleWithIcon
					{...{
						className: ' font-semibold text-[12.36px] leading-5',
						Icon: ChevronDown,
						title,
					}}
				/>
			</div>

			<div className='flex flex-col gap-2'>
				{options.map((item, key) => (
					<OneFilter {...item} key={`one-filter-${key}`} />
				))}
			</div>
		</div>
	);
};

export const AdvancedFilter = () => {
	return (
		<div className='px-4 py-3 border-r-[1.5px] flex gap-6 flex-col bg-white border-gray-300 shadow-soft-multi flex-[1]'>
			<div className=''>
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
		<div className='flex gap-11 overflow-auto'>
			{FILTERS.map((item, key) => (
				<BadgeFilters {...item} key={`filter-${key}`} />
			))}
		</div>
	);
};

export const ResultsWrapper = () => {
	return (
		<div className='flex-[5] flex gap-2 flex-col items-center'>
			<div className='flex gap-10 flex-wrap'>
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
				'px-5 py-[1px] cursor-pointer select-none',
				active ? 'text-agnes-blue' : ''
			)}>
			<p className='leading-6 text-lg font-normal'>{page}</p>
		</div>
	);
};

export const ReusablePagination = () => {
	return (
		<div className='flex gap-1 bg-white border rounded-lg px-[1px] py-3 border-border-color-darker shadow-soft-depth w-fit'>
			{Array(4)
				.fill(0)
				.map((_, key) => (
					<SinglePaginationPage
						{...{ active: true, page: `${key + 1}` }}
						key={`page-${key}`}
					/>
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
				<div className='flex gap-4 justify-between py-4'>
					<div className='w-fit'>
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
					<BreadCrumbFilters />
				</div>
				<div className='flex gap-2 pb-8'>
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
						placeholder: '',
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

export const Footer = () => {
	return <div className='w-full h-[500px] bg-agnes-blue'>Footer</div>;
};

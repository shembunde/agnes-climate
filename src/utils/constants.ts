import {
	TBadgeFilter,
	TClimateCard,
	TFilterProps,
	TFiltersListed,
	TLinkProps,
} from '@/types';

export const HEADER_LINKS: TLinkProps[] = [
	{
		title: 'Home',
		children: [],
		href: '/',
	},
	{
		href: '/about',
		title: 'About us',
		children: [],
	},

	{
		href: '/expert',
		title: 'Expert',
		children: [],
	},
	{
		href: '/resources',
		title: 'Resources',
		children: [],
	},

	{
		href: '/events',
		title: 'Events',
		children: [],
	},

	{
		href: '/work-with-use',
		title: 'Work with us',
		children: [],
	},

	{
		href: '/training',
		title: 'Training portal',
		children: [],
	},

	{
		title: 'Hotspot Maps',
		href: '/hotspot',
		children: [],
	},
];

export const FILTERS: TBadgeFilter[] = [
	{
		active: true,
		title: 'All',
	},
	{
		title: 'Climate',
	},
	{ title: 'Business' },
	{ title: 'News' },
	{ title: 'Economics' },
	{ title: 'Energy' },
	{ title: 'Equity & Governance' },
	{ title: 'Policy' },
	{ title: 'Food' },
].map((item, _) => ({ ...item, onClick: () => {} }));

export const Resources: TFilterProps[] = [
	{
		selected: true,
		title: 'All',
	},
	{
		selected: false,
		title: 'Research',
	},
	{
		selected: false,
		title: 'Videos',
	},
	{
		selected: false,
		title: 'Podcast',
	},
	{
		selected: false,
		title: 'Data',
	},
	{
		selected: false,
		title: 'Insights',
	},
].map((item, _) => ({ ...item, onClick: () => {} }));

export const Regions: TFilterProps[] = [
	{
		selected: true,
		title: 'Africa',
	},
	{
		selected: false,
		title: 'Asia',
	},
	{
		selected: false,
		title: 'Europe',
	},
].map((item, _) => ({ ...item, onClick: () => {} }));

export const Tags: TFilterProps[] = [
	{
		selected: true,
		title: 'Tag 1',
	},
	{
		selected: false,
		title: 'Tag 2',
	},
	{
		selected: false,
		title: 'Tag 3',
	},
].map((item, _) => ({ ...item, onClick: () => {} }));

export const ALL_FILTERS: TFiltersListed[] = [
	{
		title: 'Type of resources',
		options: Resources,
	},

	{
		title: 'Region',
		options: Regions,
	},

	{
		options: Tags,
		title: 'tags',
	},
];

export const CLIMATE_ACTION: TClimateCard[] = [
	{
		imgSrc: '/images/researchers.png',

		date: new Date(),
		description: `	As African leaders and negotiators come together at COP 29, we stand at a critical juncture. The impacts of climate change are no longer abstract, and for far too many communities, particularly women, the consequences are immediate and devastating. This is more than a technical issue; it’s a moral crisis. We cannot separate climate action from the pursuit of gender equality.`,
		tag: 'Energy',
		title: `Call for Gender Considerations in Climate Action: Message to African Leaders at COP 29`,
	},

	{
		date: new Date(),
		description: `	As African leaders and negotiators come together at COP 29, we stand at a critical juncture. The impacts of climate change are no longer abstract, and for far too many communities, particularly women, the consequences are immediate and devastating. This is more than a technical issue; it’s a moral crisis. We cannot separate climate action from the pursuit of gender equality.`,
		tag: 'Energy',
		title: `Call for Gender Considerations in Climate Action: Message to African Leaders at COP 29`,
		imgSrc: '/images/foggy-bush.png',
	},

	{
		imgSrc: '/images/farmer-lady.png',

		date: new Date(),
		description: `	As African leaders and negotiators come together at COP 29, we stand at a critical juncture. The impacts of climate change are no longer abstract, and for far too many communities, particularly women, the consequences are immediate and devastating. This is more than a technical issue; it’s a moral crisis. We cannot separate climate action from the pursuit of gender equality.`,
		tag: 'Energy',
		title: `Call for Gender Considerations in Climate Action: Message to African Leaders at COP 29`,
	},

	{
		imgSrc: '/images/foggy-bush.png',

		date: new Date(),
		description: `	As African leaders and negotiators come together at COP 29, we stand at a critical juncture. The impacts of climate change are no longer abstract, and for far too many communities, particularly women, the consequences are immediate and devastating. This is more than a technical issue; it’s a moral crisis. We cannot separate climate action from the pursuit of gender equality.`,
		tag: 'Energy',
		title: `Call for Gender Considerations in Climate Action: Message to African Leaders at COP 29`,
	},
];

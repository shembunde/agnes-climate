import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type TChildNode = { children: ReactNode };
export type TClassName = { className: string };
export type TTitle = { title: string };

export type TImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;

export type TLinkProps = {
	children?: TLinkProps[];
	href?: string;
	title: string;
};

export type TFilterBadge = {
	Icon?: LucideIcon;
	onClick: () => void;
	active: boolean;
	title: string;
};

export type TFiltersType = {} & Required<
	Pick<TFilterBadge, 'onClick' | 'title'>
>;

export type TBadgeFilter = { active?: boolean } & Pick<
	TFiltersType,
	'onClick' | 'title'
>;

export type TSearchProps = {
	placeholder: string;
	iconWrapperClass?: string;
} & Partial<TChildNode> &
	Partial<TClassName>;

export type TTitleIconProps = {
	title: string;
	Icon: LucideIcon;
} & Partial<TClassName>;

export type TFilterProps = { title: string; selected: boolean } & Pick<
	TFilterBadge,
	'onClick' | 'title'
> &
	Partial<TClassName>;

export type TFiltersListed = {
	options: TFilterProps[];
	title: string;
};

export type TClimateCard = {
	description: string;
	imgSrc?: string;
	tag: string;
	date: Date;
	title: string;
} & Pick<TResultsWrapperProps, 'active'>;

export type TPageProps = { page: string; active: boolean };

export type TSingleContactProps = Pick<
	TTitleIconProps,
	'Icon' | 'className' | 'title'
>;

export type TSingleSuggestedQueryProps = {
	desc: string;
	img: string;
};

export type TReusableAccordion = {
	accordionItemValue: string;
	defaultValue?: string;
	content: ReactNode;
	title: ReactNode;
	value?: string;
};

export type TAdvancedProps = { onClick: () => void };

export type TResultsWrapperProps = {
	active: boolean;
};

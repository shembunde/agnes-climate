import {
  ALL_FILTERS,
  CLIMATE_ACTION,
  FILTERS,
  FOOTER_LINKS,
  HEADER_LINKS,
  SUGGESTED_QUERIES,
} from '@/utils/constants'
import { Link } from 'react-router-dom'
import {
  TAdvancedProps,
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
  TResultsWrapperProps,
  TReusableAccordion,
  TSearchProps,
  TSingleContactProps,
  TSingleSuggestedQueryProps,
  TTitle,
  TTitleIconProps,
} from '../../types'
import { Input } from '../ui/input'

import { cn } from '@/lib/utils'
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
} from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

export const Banner = () => {
  return (
    <div className='flex h-[244.8px] w-full items-center justify-start bg-[url(/images/Background.png)] bg-cover'>
      <p className='pl-2 font-poppins text-4xl font-bold leading-[48px] text-white md:pl-16 lg:pl-24 lg:text-5xl'>
        A.I Powered Resource Library✨
      </p>
    </div>
  )
}

export const ReusableNavTree = ({ title, href, children }: TLinkProps) => {
  return (
    <div className='w-fit'>
      <Link
        className='flex items-center gap-1'
        {...{
          to: href ?? '',
        }}
      >
        {title}
        {children && children?.length > 0 && (
          <ChevronDown className='h-4 w-4 font-bold' />
        )}
      </Link>
    </div>
  )
}

export const ImageComponent2 = ({ className, ...props }: TImageProps) => {
  return <img {...props} className={cn(className, '')} />
}

export const ImageComponent = ({ className, ...props }: TImageProps) => {
  return (
    <div className='h-auto w-fit'>
      <img {...props} />
    </div>
  )
}
export const Humbugger = () => {
  return (
    <div className='fixed right-1 top-8 z-50 flex flex-col items-center gap-1 lg:hidden'>
      <p className='h-1 w-9 rounded-lg bg-black'></p>
      <p className='h-1 w-9 rounded-lg bg-black'></p>
      <p className='h-1 w-9 rounded-lg bg-black'></p>
    </div>
  )
}

export const TopNavbar = () => {
  return (
    <div className='relative z-10 flex h-[103px] w-full bg-white shadow-md'>
      <div className='flex w-full items-center justify-start gap-5 px-2 md:px-5 xl:px-40'>
        <Link to={'/'}>
          <ImageComponent
            {...{
              className: 'w-[236px] h-[78px]',
              src: '/images/logo.svg',
            }}
          />
        </Link>

        <div className='hidden w-[80%] items-center justify-between gap-4 lg:flex'>
          {HEADER_LINKS.map((item, key) => (
            <ReusableNavTree {...item} key={`link-${key}`} />
          ))}
        </div>
      </div>

      <Humbugger />
    </div>
  )
}

export const FilterTag = ({ title }: TTitle) => {
  return (
    <div className='flex gap-2.5 rounded-b-md bg-gray-100 px-3 py-1.5'>
      {title}
    </div>
  )
}

export const CustomBadge = ({
  children,
  className,
}: TChildNode & Partial<TClassName>) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-1 rounded-[25px] bg-agnes-light-blue px-2 py-1 text-agnes-blue',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const ClimateActionCard = ({
  description,
  imgSrc,
  date,
  tag,
  title,
}: TClimateCard) => {
  return (
    <Link
      to={'/resources/1'}
      className='border-1 min-h-80 min-w-72 max-w-[330px] overflow-clip rounded-xl border-gray-100 bg-white shadow-soft-depth'
    >
      {imgSrc && (
        <div className='h-fit w-full'>
          <ImageComponent
            className='h-[260px] rounded-2xl object-contain'
            {...{
              src: imgSrc,
            }}
          />
        </div>
      )}

      <div className='flex flex-col gap-4 p-4'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-3'>
            <CustomBadge className=''>{tag}</CustomBadge>
            <p className='text-center text-xs font-medium leading-4 text-placeholder'>
              {date.toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className='flex justify-start'>
            <p className='font-poppins text-[20px] font-semibold leading-8'>
              {title}
            </p>
          </div>

          <div className='flex justify-start'>
            <p className='font-poppins text-sm font-normal leading-6 text-placeholder'>
              {description.substring(0, 100)}...
            </p>
          </div>

          <div className='flex justify-between text-gray-800'>
            <button className='flex items-center justify-center gap-2 rounded-lg bg-gray-100 p-2'>
              <p className='font-poppins text-sm font-medium leading-4'>
                Read More
              </p>
              <ArrowRight className='h-4 w-4' />
            </button>

            <div className=''>
              <img
                className='h-6 w-6 cursor-pointer'
                title='Summarize with AI'
                src='/icons/ai.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const Search = ({
  iconWrapperClass = '',
  className = '',
  placeholder,
  children,
}: TSearchProps) => {
  return (
    <div className='relative w-full'>
      <Input
        className={cn(
          'flex w-full justify-between rounded-full border border-[var(--border-color)] bg-white font-medium shadow-soft-depth placeholder:text-[18px] placeholder:font-normal placeholder:leading-7 placeholder:text-[var(--placeholder-text)]',
          className,
        )}
        {...{
          placeholder,
        }}
      />

      <div
        className={cn(
          'absolute right-6 top-[calc(calc(100%-32px)/2)] flex items-center justify-center gap-6',
          iconWrapperClass,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export const SingleSuggestedInquiry = ({
  img,
  desc,
}: TSingleSuggestedQueryProps) => {
  return (
    <div className='flex h-14 w-full max-w-full items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-soft-depth lg:w-[220px] lg:px-1'>
      <div className='w-fit'>
        <ImageComponent
          {...{
            className: 'w-full h-auto',
            src: img,
          }}
        />
      </div>
      <div className='text-[14px] font-normal leading-[18px] text-gray-400'>
        {desc}
      </div>
    </div>
  )
}

export const SuggestedInquiries = () => {
  return (
    <div className='flex flex-col items-center gap-2 px-4 lg:flex-row lg:gap-9 lg:px-0'>
      {SUGGESTED_QUERIES.map((props, index) => (
        <SingleSuggestedInquiry {...props} key={`suggestion-${index}`} />
      ))}
    </div>
  )
}

export const FilterBadge = ({ Icon, onClick, title, active }: TFilterBadge) => {
  return (
    <div
      className={cn(
        'flex w-fit cursor-pointer select-none items-center justify-center gap-2 rounded-md px-3 py-[6px]',
        active ? 'bg-agnes-blue' : 'border border-gray-600',
      )}
      {...{
        onClick,
      }}
    >
      {Icon && (
        <Icon
          className={cn(
            'h-4 w-4',
            active ? 'stroke-white' : 'stroke-placeholder',
          )}
        />
      )}
      <p
        className={cn(
          'text-sm font-medium leading-6',
          active ? 'text-white' : 'text-placeholder',
        )}
      >
        {title}
      </p>
    </div>
  )
}

export const BadgeFilters = ({ active, onClick, title }: TBadgeFilter) => {
  return (
    <div
      className={cn(
        'selection-none flex w-auto cursor-pointer select-none items-center justify-center gap-2 rounded-md px-3 py-[6px] font-poppins text-dark',
        active ? 'bg-agnes-blue text-white' : 'bg-gray-100 text-gray-800',
      )}
      {...{
        onClick,
      }}
    >
      <p className='w-auto text-sm font-medium leading-6 text-inherit'>
        {title}
      </p>
    </div>
  )
}

export const Inquiry = () => {
  return (
    <div className='m-auto flex w-full flex-col gap-6 px-2 py-32 sm:py-36 md:py-48 lg:w-2/3 lg:py-64'>
      <p className='leading-14 text-center text-2xl font-semibold text-gray-700 lg:text-4xl'>
        What would you like to know?
      </p>

      <Search
        {...{
          children: (
            <>
              <Paperclip
                className='hidden h-8 w-8 cursor-pointer stroke-gray-400 lg:block'
                {...{}}
              />
              <SendHorizonal
                className='h-8 w-8 cursor-pointer stroke-agnes-blue'
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
  )
}

export const RootLayout = ({ children }: Partial<TChildNode>) => {
  return <div className='bg-background h-screen w-screen'>{children}</div>
}

export const OneFilter = ({
  className,
  onClick,
  title,
  selected,
}: TFilterProps) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer select-none gap-2 rounded-lg p-1 font-poppins',
        className,
        selected ? 'bg-gray-100' : '',
      )}
      {...{ onClick }}
    >
      <Checkbox />
      <p
        className={cn(
          'font-poppins text-xs leading-5',
          selected ? 'text-placeholder' : 'text-bodytext',
        )}
      >
        {title}
      </p>
    </div>
  )
}

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
      }}
    >
      <AccordionTrigger className='w-full [&[data-state=open]_svg]:rotate-180'>
        {title}
      </AccordionTrigger>

      <AccordionContent className='pb-4'>{content}</AccordionContent>
    </AccordionItem>
  </Accordion>
)

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
            className: ' font-semibold text-[12.36px] leading-5',
            accordionItemValue: title,
            title,
            content: (
              <div className='flex flex-col gap-2'>
                {options.map((item, key) => (
                  <OneFilter {...{ ...item }} key={`one-filter-${key}`} />
                ))}
              </div>
            ),
          }}
        />
      </div>
    </div>
  )
}

export const AdvancedFilter = ({ onClick }: TAdvancedProps) => {
  return (
    <div className='col-span-2 flex h-fit flex-col gap-6 border-r-[1.5px] border-gray-300 bg-white px-4 py-3 shadow-soft-depth lg:col-span-1'>
      <div className='w-full'>
        <FilterUnderFilter
          {...{
            onClick,
          }}
        />
      </div>

      {ALL_FILTERS.map((item, key) => (
        <ReusableAdvancedSubSection
          {...{
            ...item,
          }}
          key={`all-filters-${key}`}
        />
      ))}
    </div>
  )
}

export const BreadCrumbFilters = () => {
  return (
    <div className='flex items-center gap-11 overflow-auto py-2'>
      {FILTERS.map((item, key) => (
        <BadgeFilters {...item} key={`filter-${key}`} />
      ))}
    </div>
  )
}

export const ResultsWrapper = ({ active }: TResultsWrapperProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2',
        active
          ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3'
          : 'col-span-3 sm:col-span-4 md:col-span-5 lg:col-span-6',
      )}
    >
      <div
        className={cn(
          'grid gap-6 gap-y-4 lg:gap-y-14',
          active
            ? 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
        )}
      >
        {CLIMATE_ACTION.map((item, key) => (
          <ClimateActionCard
            {...{
              ...item,
              active,
            }}
            key={`action-${key}`}
          />
        ))}
      </div>

      <ReusablePagination />
    </div>
  )
}

export const SinglePaginationPage = ({ active, page }: TPageProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer select-none px-4 py-[1px] md:px-5',
        active ? 'text-agnes-blue' : '',
      )}
    >
      <p className='text-sm font-normal leading-6 md:text-lg'>{page}</p>
    </div>
  )
}

export const ReusablePagination = () => {
  return (
    <div className='flex w-fit items-center gap-1 rounded-lg border border-border-color-darker bg-white px-[1px] py-3 shadow-soft-depth'>
      {Array(4)
        .fill(0)
        .map((_, key) => (
          <div className='flex items-center gap-1' key={key}>
            <SinglePaginationPage
              {...{ active: true, page: `${key + 1}` }}
              key={`page-${key}`}
            />
            <p className='font-bold'>|</p>
          </div>
        ))}

      <SinglePaginationPage
        {...{
          active: false,
          page: '...',
        }}
      />

      <p className='font-bold'>|</p>

      <SinglePaginationPage
        {...{
          active: false,
          page: 'Last',
        }}
      />
    </div>
  )
}

export const Resources = () => {
  const [advancedFilters, setAdvancedFilters] = useState<boolean>(true)

  const handleToggle = () => setAdvancedFilters(prev => !prev)

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-1'>
        <p className='text-[22px] font-medium leading-8 text-gray-700'>
          Resources
        </p>

        <Separator className='h-0.5 stroke-gray-300' />
      </div>

      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-2 justify-between gap-4 py-4 sm:grid-cols-3 md:grid-cols-4'>
          <div className='w-fit grid-cols-1'>
            <FilterBadge
              {...{
                active: advancedFilters,
                onClick: handleToggle,
                Icon: FilterIcon,
                title: 'Filter',
              }}
            />
          </div>

          <div className='col-span-3'>
            <BreadCrumbFilters />
          </div>
        </div>
        <div className='grid grid-cols-2 items-center gap-2 pb-8 sm:grid-cols-3 md:grid-cols-4 md:items-start'>
          {advancedFilters && <AdvancedFilter {...{ onClick: handleToggle }} />}

          <ResultsWrapper
            {...{
              active: advancedFilters,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const TitleWithIcon = ({
  className = '',
  onClick,
  Icon,
  title,
}: TTitleIconProps & Partial<TAdvancedProps>) => {
  return (
    <div className='flex items-center justify-between'>
      <p
        className={cn(
          'select-none font-poppins text-base font-medium leading-5 text-dark text-gray-800',
          className,
        )}
      >
        {title}
      </p>

      <div className='flex cursor-pointer select-none items-center justify-center gap-2'>
        <Icon className='h-6 w-6 stroke-gray-800' onClick={() => onClick?.()} />
      </div>
    </div>
  )
}

export const FilterUnderFilter = ({ onClick }: TAdvancedProps) => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className=''>
        <TitleWithIcon
          {...{ Icon: ArrowLeftIcon, title: 'Filter results', onClick }}
        />{' '}
      </div>

      <div className='w-full'>
        <Search
          {...{
            placeholder: 'Search for Resource',
            children: (
              <SearchIcon className='h-6 w-6 cursor-pointer stroke-agnes-blue' />
            ),
            iconWrapperClass: 'top-[calc(calc(100%-24px)/2)] right-3',
            className: 'w-full',
          }}
        />
      </div>
    </div>
  )
}

export const FooterSectionBlueprint = ({
  children,
  className,
}: TChildNode & Partial<TClassName>) => {
  return (
    <div
      className={cn(
        'flex w-[400px] flex-col justify-between gap-2 text-footer-text',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const FooterContactInfo = ({
  Icon,
  className,
  title,
}: TSingleContactProps) => {
  return (
    <div className={cn('flex items-center gap-4 py-1', className)}>
      <Icon className='h-5 w-5 stroke-agnes-blue' />
      <p className='text-base font-normal leading-7'> {title}</p>
    </div>
  )
}

export const FooterLink = ({
  title,
  href,
}: Required<Pick<TLinkProps, 'href' | 'title'>>) => {
  return (
    <Link className='flex w-fit items-center gap-2' to={href}>
      <ChevronRight className='h-5 w-5 stroke-agnes-blue' />
      <p className='text-base font-normal leading-7 text-footer-text'>
        {title}
      </p>
    </Link>
  )
}

export const CopyRights = () => {
  return (
    <div className='flex h-[100px] items-center justify-center bg-agnes-blue'>
      <p className='text-center text-base font-normal leading-9 text-footer-text'>
        © Copyright 2024 AGNES Africa. Powered by 
      </p>
    </div>
  )
}

export const Footer = () => {
  return (
    <div className='h-fit min-h-[400px] w-full'>
      <div className='flex flex-wrap items-center justify-center gap-6 bg-footer-bg py-10'>
        <FooterSectionBlueprint
          {...{
            children: (
              <>
                <ImageComponent {...{ src: '/images/logo.svg' }} />
                <p className='text-base font-normal leading-7'>
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
                <p className='text-2xl font-bold leading-8 text-white'>
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
                <p className='font-poppins text-2xl font-bold leading-8 text-white'>
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
  )
}

export const ResourceCard = () => {
  const buttons = [
    'Table of Contents',
    'Introduction',
    'Progress Made',
    'Featured Content',
    'Description',
  ]
  return (
    <div className='flex min-w-[200px] max-w-[210px] flex-col space-y-7'>
      <div className='space-y-7'>
        {buttons.map((item, index) => (
          <button
            className={cn(
              'w-full p-3 text-[14px] font-[400] leading-[21px]',
              index === 0
                ? 'border-l-[4px] border-agnes-blue bg-agnes-light-blue text-[17px] font-bold leading-[24px]'
                : '',
            )}
            key={index}
          >
            <p className='flex w-full justify-start'>{item}</p>
          </button>
        ))}
      </div>
      <div className='flex w-full items-center justify-between'>
        <p className='text-[14px] font-bold leading-[20px]'>Share this:</p>
        <SocialLinks />
      </div>
      <button className='h-[44px] rounded-[8px] bg-agnes-blue'>
        <div className='flex w-full items-center justify-center space-x-4'>
          <p className='text-[17px] font-bold leading-[24px] text-white'>
            Download
          </p>
          <img src='/svgs/download.svg' height={20} width={20} />
        </div>
      </button>
    </div>
  )
}

export const SocialLinks = () => {
  return (
    <div className='flex space-x-5'>
      <img src='/svgs/x.svg' height={20} width={20} />
      <img src='/svgs/facebook.svg' height={30} width={30} />
      <img src='/svgs/linkedin.svg' height={30} width={30} />
    </div>
  )
}

export const ShareLinkButton = () => {
  return (
    <button className='flex h-[44px] items-center justify-center rounded-[8px] border-2 border-neutral-300 bg-transparent p-2'>
      <div className='flex w-full items-center justify-center space-x-4'>
        <img src='/svgs/copy.svg' height={30} width={30} />
        <p className='text-[17px] font-bold leading-[24px] text-neutral-700'>
          Copy Link
        </p>
      </div>
    </button>
  )
}

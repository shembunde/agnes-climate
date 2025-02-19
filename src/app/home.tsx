import { Banner, Inquiry, Resources } from '@/components/dev/core'

export default function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-full'>
        <Banner />
      </div>
      <div className='w-full'>
        <Inquiry />
      </div>

      <div className='w-full px-8'>
        <Resources />
      </div>
    </div>
  )
}

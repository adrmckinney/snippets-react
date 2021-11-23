import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import Button from '../_generic/Button'
import MobilePopOverHeader from './mobile-pop-over-header'

const reactShit = [
  {
    name: 'Custom Hooks',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Generic Components',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Utility Components',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Configs',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]

type Props = {
  title: string,
}

const MobileHeaderPopOverContent = ({ title }: Props) => {
  return (
    <>
      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
        <div className='pt-1 pb-6 px-5 sm:pb-8'>
          <MobilePopOverHeader title={'Snippets'} />
          <div className='mt-6 sm:mt-8'>
            <nav>
              <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                {reactShit.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50'
                  >
                    <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                      <item.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>{item.name}</div>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className='py-6 px-5'>
          <div className='grid grid-cols-2 gap-4'>
            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Pricing
            </a>

            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Docs
            </a>

            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Company
            </a>

            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Resources
            </a>

            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Blog
            </a>

            <a
              href='#'
              className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Contact Sales
            </a>
          </div>
          <div className='mt-6'>
            <Button
              type={'button'}
              buttonLabel={'Sign up'}
              buttonSize={'medium'}
              buttonStatus={'primary'}
              icon={'edit'}
              customButtonStyle={'w-full'}
            />
            <p className='mt-6 text-center text-base font-medium text-gray-500'>
              Already a member?{' '}
              <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileHeaderPopOverContent

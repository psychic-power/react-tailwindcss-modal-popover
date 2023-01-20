import { Popover, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

function PopoverComponent() {
  return (
    <div className="max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-pink-200 hover:bg-pink-300 px-1 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <EllipsisVerticalIcon className="h-5 w-5 text-xl text-pink-500 stroke-1 hover:stroke-[2px]" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-[75%] -translate-y-[150%] transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className='bg-white p-3 flex flex-col'>
                    <button className='flex px-2 py-1 hover:bg-gray-100 mx-1'>Archive</button>
                    <button className='flex px-2 py-1 hover:bg-gray-100 mx-1'>Share</button>
                    <button className='flex px-2 py-1 hover:bg-gray-100 mx-1 text-red-600'>Delete</button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}


export default PopoverComponent;

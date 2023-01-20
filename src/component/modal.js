import { Dialog, Popover, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import PopoverComponent from "./popover";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit Project
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button className="right-3 top-3 fixed" onClick={closeModal}>
                    <XMarkIcon className="w-4 h-4 text-gray-500 hover:text-gray-600" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Project
                  </Dialog.Title>
                  <div className="mt-8">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-bold uppercase text-gray-900"
                    >
                      name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border text-lg rounded-md focus:shadow-primary focus:border-pink-300 focus:ring-1 focus:ring-pink-300 focus:outline-none block w-full py-2.5 px-3.5 border-gray-300 text-gray-900 font-medium"
                      placeholder="Input your name"
                    />
                  </div>
                  <div className="mt-2 mb-40">
                    <p className="text-sm text-gray-500">......</p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="w-full mr-2 rounded-lg border border-transparent bg-pink-400 px-4 py-2 text-sm font-medium text-white hover:bg-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Save
                    </button>
                    {/* Popover component EllipsisVerticalIcon button */}
                    <PopoverComponent />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

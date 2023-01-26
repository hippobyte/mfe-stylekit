import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="w-full bg-slate-800">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex h-16 items-center justify-between lg:gap-8 xl:grid lg:grid-cols-12">
                <div className="flex lg:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </a>
                  </div>
                </div>
                {/* Search section */}
                <div className="flex lg:col-span-6">
  
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-slate-600 p-2 text-slate-400 hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Links section */}
                <div className="hidden lg:block lg:col-span-4">
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      <a
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:text-white"
                      >
                        Support
                      </a>
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                View Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-600 hover:text-slate-100"
                >
                  Support
                </Disclosure.Button>
              </div>
              <div className="border-t border-slate-800 pt-4 pb-3">
                <div className="px-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-600 hover:text-slate-100"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-600 hover:text-slate-100"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-600 hover:text-slate-100"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
    </Disclosure>
  )
}

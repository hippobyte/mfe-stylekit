import { BrowserRouter, Link } from "react-router-dom"
import * as Icons from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

function DynamicIcon({ name }) {
  const className = 'mr-3 flex-shrink-0 h-6 w-6';
  const IconComponent = name ? Icons[name] : null;

  if (!IconComponent) {
    return <Icons.MinusIcon className={className} />;
  }

  return <IconComponent className={className} />;
};

export default function NavItem({ menuItem }) {
  return (
    <BrowserRouter>
      <Link
        key={menuItem.key}
        to={menuItem.path}
        className={classNames(
          menuItem.active ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
          'cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        )}
        aria-current={menuItem.active ? 'page' : undefined}
      >
        <DynamicIcon
          className={classNames(
            menuItem.active ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
          )}
          name={menuItem.icon}
          aria-hidden="true"
        />
        {menuItem.title}
      </Link>
    </BrowserRouter>
  )
};
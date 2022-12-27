import * as Icons from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

function DynamicIcon({ name }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return <Icons.MinusIcon />;
  }

  return <IconComponent />;
};

export default function NavItem({ menuItem }) {
  return (
    <a
      key={menuItem.key}
      path={menuItem.path}
      className={classNames(
        item.active ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
      )}
      aria-current={item.active ? 'page' : undefined}
    >
      <DynamicIcon
        className={classNames(
          menuItem.active ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 flex-shrink-0 h-6 w-6'
        )}
        aria-hidden="true"
      />
      {menuItem.title}
    </a>
  )
};
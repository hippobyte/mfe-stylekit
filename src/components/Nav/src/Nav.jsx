import { NavItem } from '../index';

export default function Nav(props) {
  const { menu } = props;

  if (!menu) {
    return null;
  }

  return (
    <nav className="hidden lg:min-h-screen lg:inset-y-0 lg:px-4 lg:pt-5 lg:pb-4 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100">
      <div className="space-y-1">
        {menu.map((item) => {
          return <NavItem key={item.key} menuItem={item} />;
        })}
      </div>
    </nav>
  )
};
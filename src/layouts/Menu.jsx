import { useLocation } from 'react-router-dom';
import { HouseIcon, UserGroupIcon } from '../icons';
import MenuItem from './MenuItem';

const menuList = [
  { id: 1, icon: HouseIcon, to: '/' },
  { id: 2, icon: UserGroupIcon, to: '/friend' }
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-center gap-2 py-1.5">
      {menuList.map(el => (
        <MenuItem
          key={el.id}
          Icon={el.icon}
          to={el.to}
          active={pathname === el.to}
        />
      ))}
    </nav>
  );
}

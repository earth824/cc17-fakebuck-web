import { Link } from 'react-router-dom';

export default function MenuItem({ active, Icon, to }) {
  return (
    <Link
      to={to}
      className={`px-12 py-2 rounded-lg ${active ? '' : 'hover:bg-gray-100'}`}
    >
      <Icon className={`${active ? 'fill-blue-500' : 'fill-gray-500'}`} />
    </Link>
  );
}

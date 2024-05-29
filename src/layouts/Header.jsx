import { Link } from 'react-router-dom';
import { FacebookIcon } from '../icons';
import Menu from './Menu';
import Dropdown from './Dropdown';

export default function Header() {
  return (
    <header className="grid grid-cols-3 bg-white shadow px-4 items-center">
      <div className="justify-self-start">
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <div>
        <Menu />
      </div>
      <div className="justify-self-end">
        <Dropdown />
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import { RightFromBracketIcon } from '../icons';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const { logout, authUser } = useAuth();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    setOpen(false);
    logout();
    navigate('/login');
  };

  return (
    <div className="relative">
      <div role="button" onClick={() => setOpen(prev => !prev)}>
        <Avatar src={authUser?.profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div className="p-2 w-96 rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)] bg-white">
            <Link
              to={`/profile/${authUser?.id}`}
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2">
                <Avatar size={3.75} src={authUser?.profileImage} />
                <div className="flex flex-col">
                  <h2 className="font-semibold">
                    {authUser?.firstName} {authUser?.lastName}
                  </h2>
                  <small className="text-gray-500">See your profile</small>
                </div>
              </div>
            </Link>
            <hr className="my-2 border border-gray-300" />
            <div
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
              role="button"
              onClick={handleClickLogout}
            >
              <div className="bg-gray-300 w-9 h-9 rounded-full flex items-center justify-center">
                <RightFromBracketIcon />
              </div>
              <span className="text-sm font-semibold">Log out</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

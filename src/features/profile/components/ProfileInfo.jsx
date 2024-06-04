import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import useProfile from '../hooks/useProfile';

export default function ProfileInfo() {
  const { profileUser, profileUserFriends } = useProfile();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-semibold">
        {profileUser?.firstName} {profileUser?.lastName}
      </h2>
      {profileUserFriends.length > 0 && (
        <span className="font-medium text-gray-500">
          {profileUserFriends.length} friends
        </span>
      )}
      <div className="flex -space-x-2">
        {profileUserFriends.map(el => (
          <Link key={el.id} to={`/profile/${el.id}`}>
            <Avatar size={2} src={el.profileImage} />
          </Link>
        ))}
      </div>
    </div>
  );
}

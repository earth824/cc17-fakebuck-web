import CoverImage from './CoverImage';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../../components/Avatar';
import ProfileInfo from './ProfileInfo';
import ProfileAction from './ProfileAction';

export default function ProfileContainer() {
  const { authUser } = useAuth();
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <CoverImage src={authUser?.coverImage} />
      <div className="flex gap-4 items-end max-w-[68.5rem] mx-auto px-8 pb-4">
        <div className="-mt-5">
          <Avatar src={authUser?.profileImage} size={10} />
        </div>
        <div className="flex-1">
          <ProfileInfo />
        </div>
        <div>
          <ProfileAction />
        </div>
      </div>
    </div>
  );
}

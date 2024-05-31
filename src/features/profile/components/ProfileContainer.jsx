import CoverImage from './CoverImage';
import Avatar from '../../../components/Avatar';
import ProfileInfo from './ProfileInfo';
import ProfileAction from './ProfileAction';
import useProfile from '../hooks/useProfile';

export default function ProfileContainer() {
  const { profileUser } = useProfile();
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <CoverImage src={profileUser?.coverImage} rounded="bottom" />
      <div className="flex gap-4 items-end max-w-[68.5rem] mx-auto px-8 pb-4">
        <div className="-mt-5">
          <Avatar src={profileUser?.profileImage} size={10} />
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

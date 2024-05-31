import Avatar from '../../../components/Avatar';
import useProfile from '../hooks/useProfile';

export default function ProfileInfo() {
  const { profileUser } = useProfile();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-semibold">
        {profileUser?.firstName} {profileUser?.lastName}
      </h2>
      <span className="font-medium text-gray-500">2 friends</span>
      <div className="flex -space-x-2">
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}

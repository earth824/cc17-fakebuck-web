import Avatar from '../../../components/Avatar';
import useAuth from '../../../hooks/useAuth';
import PictureForm from './PictureForm';
import CoverImage from './CoverImage';

export default function EditProfileForm() {
  const { authUser, updateAuthUser } = useAuth();

  const handleUpdateProfileImage = async file => {
    const formData = new FormData();
    formData.append('profileImage', file);
    await updateAuthUser(formData);
  };

  const handleUpdateCoverImage = async file => {
    const formData = new FormData();
    formData.append('coverImage', file);
    await updateAuthUser(formData);
  };

  return (
    <div>
      <PictureForm
        title="Profile Image"
        initialImage={authUser?.profileImage}
        render={src => <Avatar size={10.5} src={src} />}
        onSave={handleUpdateProfileImage}
      />
      <PictureForm
        title="Cover Image"
        initialImage={authUser?.coverImage}
        render={src => <CoverImage src={src} />}
        onSave={handleUpdateCoverImage}
      />
    </div>
  );
}

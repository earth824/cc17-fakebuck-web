import useAuth from '../../../hooks/useAuth';
import PictureForm from './PictureForm';

export default function EditProfileForm() {
  const { authUser } = useAuth();
  return (
    <div>
      <PictureForm
        title="Profile Image"
        initialImage={authUser?.profileImage}
      />
      {/* <PictureForm title="Cover Image" /> */}
    </div>
  );
}

import { useState } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import EditProfileForm from './EditProfileForm';

export default function ProfileAction() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button bg="gray" color="black" onClick={() => setOpen(true)}>
        Edit Profile
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Profile"
        width={44}
      >
        <EditProfileForm />
      </Modal>
    </div>
  );
}

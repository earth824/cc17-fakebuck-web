import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import useAuth from '../../../hooks/useAuth';
import Modal from '../../../components/Modal';
import { useState } from 'react';
import PostForm from './PostForm';

export default function CreatePostContainer() {
  const { authUser } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow px-4 py-3 flex gap-2">
      <Link to={`/profile/${authUser?.id}`} className="shrink-0">
        <Avatar src={authUser?.profileImage} />
      </Link>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-200 hover:bg-gray-300 w-full rounded-full text-gray-500 text-left px-2.5"
      >
        What&rsquo;s on your mind, {authUser?.firstName}?
      </button>
      <Modal
        title="Create post"
        open={open}
        onClose={() => setOpen(false)}
        width={40}
      >
        <PostForm />
      </Modal>
    </div>
  );
}

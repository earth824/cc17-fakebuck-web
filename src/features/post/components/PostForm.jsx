import { useRef } from 'react';
import Button from '../../../components/Button';
import useAuth from '../../../hooks/useAuth';
import { ImageIcon } from '../../../icons';
import { useState } from 'react';
import axios from '../../../config/axios';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';

export default function PostForm() {
  const { authUser } = useAuth();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClickCreatePost = async () => {
    try {
      const formData = new FormData();
      if (message) {
        formData.append('message', message);
      }
      if (file) {
        formData.append('image', file);
      }
      setLoading(true);
      await axios.post('/posts', formData);
      toast.success('create post successfully');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {loading && <Spinner transparent />}
      <textarea
        className="block w-full focus:outline-none resize-none"
        rows={5}
        placeholder={`What's on your mind, ${authUser?.firstName}?`}
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={e => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      {file ? (
        <div
          role="button"
          className="bg-gray-100 relative"
          onClick={() => fileEl.current?.click()}
        >
          <img src={URL.createObjectURL(file)} alt="post" className="mx-auto" />
          <button
            className="absolute top-1 right-1"
            onClick={e => {
              e.stopPropagation();
              setFile(null);
              fileEl.current.value = '';
            }}
          >
            &#10005;
          </button>
        </div>
      ) : (
        <div
          role="button"
          className="flex flex-col items-center gap-2 bg-gray-100 rounded-lg py-8 hover:bg-gray-200"
          onClick={() => fileEl.current?.click()}
        >
          <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
            <ImageIcon />
          </div>
          <span>Add Photo</span>
        </div>
      )}
      <Button width="full" onClick={handleClickCreatePost}>
        Post
      </Button>
    </div>
  );
}

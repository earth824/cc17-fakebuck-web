import { useRef } from 'react';
import FormButton from './FormButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';

export default function PictureForm({ title, initialImage, render, onSave }) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickSave = async () => {
    try {
      if (file) {
        setLoading(true);
        await onSave(file);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.messaage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner transparent />}
      <input
        type="file"
        ref={fileEl}
        className="hidden"
        onChange={e => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center p-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          {file && (
            <>
              <FormButton onClick={handleClickSave}>Save</FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  fileEl.current.value = '';
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => fileEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {render(file ? URL.createObjectURL(file) : initialImage)}
      </div>
    </div>
  );
}

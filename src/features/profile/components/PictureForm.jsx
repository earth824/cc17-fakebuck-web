import { useRef } from 'react';
import Avatar from '../../../components/Avatar';
import FormButton from './FormButton';
import { useState } from 'react';

export default function PictureForm({ title, initialImage }) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);

  return (
    <div>
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
              <FormButton>Save</FormButton>
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
        <Avatar
          size={10.5}
          src={file ? URL.createObjectURL(file) : initialImage}
        />
      </div>
    </div>
  );
}

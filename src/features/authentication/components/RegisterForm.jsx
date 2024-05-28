import { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import validateRegister from '../validators/validate-register';
import authApi from '../../../apis/auth';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const initialInput = {
  firstName: '',
  lastName: '',
  emailOrMobile: '',
  password: '',
  confirmPassword: ''
};

const initialInputError = {
  firstName: '',
  lastName: '',
  emailOrMobile: '',
  password: '',
  confirmPassword: ''
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInputError });

      await authApi.register(input);
      onSuccess();
      toast.success('registered successfully. please log in to continue.');
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (err.response.data.field === 'emailOrMobile')
          setInputError(prev => ({
            ...prev,
            emailOrMobile: 'email or mobile already in use.'
          }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            error={inputError.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            error={inputError.lastName}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            error={inputError.emailOrMobile}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
        </div>
        <div className="col-span-2 text-center">
          <Button bg="green" width="40">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}

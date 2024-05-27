import LoginForm from '../features/authentication/components/LoginForm';
import RegisterContainer from '../features/authentication/components/RegisterContainer';

export default function LoginPage() {
  return (
    <div className="bg-white p-4 rounded-lg max-w-sm mx-auto shadow-lg mt-32">
      <LoginForm />
      <hr className="my-4 border" />
      <RegisterContainer />
    </div>
  );
}

import Button from '../../../components/Button';
import Input from '../../../components/Input';

export default function RegisterForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input placeholder="First name" />
        </div>
        <div>
          <Input placeholder="Last name" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Email address or mobile number" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Password" />
        </div>
        <div className="col-span-2">
          <Input placeholder="Confirm password" />
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

import Button from '../../../components/Button';
import useProfile from '../hooks/useProfile';

export default function SenderAction() {
  const { confirmRequest } = useProfile();
  return (
    <div className="flex gap-4">
      <Button onClick={confirmRequest}>Confirm request</Button>
      <Button bg="gray" color="black">
        Delete request
      </Button>
    </div>
  );
}

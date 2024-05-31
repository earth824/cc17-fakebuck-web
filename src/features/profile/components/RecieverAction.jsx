import Button from '../../../components/Button';
import useProfile from '../hooks/useProfile';

export default function ReceiverAction() {
  const { cancelRequest } = useProfile();
  return (
    <div>
      <Button bg="gray" color="black" onClick={cancelRequest}>
        Cancel request
      </Button>
    </div>
  );
}

import Button from '../../../components/Button';
import useProfile from '../hooks/useProfile';

export default function UnknownAction() {
  const { requestFriend } = useProfile();
  return (
    <div>
      <Button onClick={requestFriend}>Add friend</Button>
    </div>
  );
}

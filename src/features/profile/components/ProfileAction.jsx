import useProfile from '../hooks/useProfile';
import MeAction from './MeAction';
import { RELATIONSHIP_TO_AUTH_USER } from '../../../constants';
import UnknownAction from './UnknownAction';
import ReceiverAction from './RecieverAction';

const componentMapping = {
  [RELATIONSHIP_TO_AUTH_USER.ME]: <MeAction />,
  [RELATIONSHIP_TO_AUTH_USER.UNKNOWN]: <UnknownAction />,
  [RELATIONSHIP_TO_AUTH_USER.RECEIVER]: <ReceiverAction />
};

export default function ProfileAction() {
  const { relationshipToAuthUser } = useProfile();
  return <>{componentMapping[relationshipToAuthUser]}</>;
}

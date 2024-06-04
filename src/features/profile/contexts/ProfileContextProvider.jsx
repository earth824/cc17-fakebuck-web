import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import userApi from '../../../apis/user';
import useAuth from '../../../hooks/useAuth';
import { RELATIONSHIP_TO_AUTH_USER } from '../../../constants';
import relationshipApi from '../../../apis/relationship';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState(null);
  const [relationshipToAuthUser, setRelationshipToAuthUser] = useState('');
  const [profileUserFriends, setProfileUserFriends] = useState([]);

  const { userId } = useParams();
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        const res = await userApi.getProfileUser(userId);
        setProfileUser(res.data.user);
        setRelationshipToAuthUser(res.data.relationshipToAuthUser);
        setProfileUserFriends(res.data.friends);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileUser();
  }, [userId]);

  useEffect(() => {
    if (authUser?.id === +userId) {
      setProfileUser(authUser);
    }
  }, [authUser, userId]);

  const requestFriend = async () => {
    await relationshipApi.requestFriend(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.RECEIVER);
  };

  const cancelRequest = async () => {
    await relationshipApi.cancelRequest(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
  };

  const confirmRequest = async () => {
    await relationshipApi.confirmRequest(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.FRIEND);
    setProfileUserFriends(prev => [...prev, authUser]);
  };

  const rejectRequest = async () => {
    await relationshipApi.rejectRequest(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
  };

  const unfriend = async () => {
    await relationshipApi.unfriend(userId);
    setRelationshipToAuthUser(RELATIONSHIP_TO_AUTH_USER.UNKNOWN);
    setProfileUserFriends(prev => prev.filter(el => el.id !== authUser.id));
  };

  const value = {
    profileUser,
    relationshipToAuthUser,
    requestFriend,
    cancelRequest,
    confirmRequest,
    rejectRequest,
    unfriend,
    profileUserFriends
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

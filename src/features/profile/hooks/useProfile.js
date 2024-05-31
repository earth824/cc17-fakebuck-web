import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContextProvider';

export default function useProfile() {
  return useContext(ProfileContext);
}

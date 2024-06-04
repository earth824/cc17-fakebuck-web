import axios from '../config/axios';

const relationshipApi = {};

relationshipApi.requestFriend = receiverId =>
  axios.post(`/relationships/users/${receiverId}`);

relationshipApi.confirmRequest = senderId =>
  axios.patch(`/relationships/users/${senderId}`);

relationshipApi.cancelRequest = receiverId =>
  axios.delete(`/relationships/users/${receiverId}/cancel`);

export default relationshipApi;

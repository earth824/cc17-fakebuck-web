import axios from '../config/axios';

const relationshipApi = {};

relationshipApi.requestFriend = receiverId =>
  axios.post(`/relationships/users/${receiverId}`);

relationshipApi.confirmRequest = senderId =>
  axios.patch(`/relationships/users/${senderId}`);

relationshipApi.cancelRequest = receiverId =>
  axios.delete(`/relationships/users/${receiverId}/cancel`);

relationshipApi.rejectRequest = senderId =>
  axios.delete(`/relationships/users/${senderId}/reject`);

relationshipApi.unfriend = targetUserId =>
  axios.delete(`/relationships/users/${targetUserId}/unfriend`);

export default relationshipApi;

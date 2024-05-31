import axios from '../config/axios';

const relationshipApi = {};

relationshipApi.requestFriend = receiverId =>
  axios.post(`/relationships/users/${receiverId}`);

export default relationshipApi;

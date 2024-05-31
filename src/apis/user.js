import axios from '../config/axios';

const userApi = {};

userApi.uploadUserImage = formData => axios.patch('/users', formData);
userApi.getProfileUser = profileUserId => axios.get(`/users/${profileUserId}`);

export default userApi;

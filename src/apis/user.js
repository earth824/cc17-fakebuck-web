import axios from '../config/axios';

const userApi = {};

userApi.uploadUserImage = formData => axios.patch('/users', formData);

export default userApi;

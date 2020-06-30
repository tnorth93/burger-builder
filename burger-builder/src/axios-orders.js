import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-f8687.firebaseio.com/'
})

export default instance;
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

httpClient.interceptors.response.use(undefined, error => {
  if (error.status === 500) {
    throw new Error(
      'The jokes server is having problems, please try again later.',
    );
  }
});

export default httpClient;

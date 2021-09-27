import httpClient from './client';
import { JokeResponse } from './interfaces/JokeResponse';

class JokesService {
  async getRandomJokeByCategory(category: string) {
    const response = await httpClient.get<JokeResponse>(
      `/random?category=${category}`,
    );

    if (response.status !== 200) {
      throw new Error(
        'An error has ocurred when recovering a joke, please try again.',
      );
    }

    return response.data;
  }
}

export default JokesService;

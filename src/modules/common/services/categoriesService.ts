import httpClient from './client';
import { CategoriesResponse } from './interfaces/CategoriesResponse';

class CategoriesService {
  private resource = 'categories';

  async getCategories() {
    const response = await httpClient.get<CategoriesResponse>(this.resource);

    if (response.status !== 200) {
      throw new Error(
        'An error has ocurred when recovering categories, please try again.',
      );
    }

    return response.data;
  }
}

export default CategoriesService;

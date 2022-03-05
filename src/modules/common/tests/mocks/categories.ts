import faker from 'faker';

const categories = ['animal', 'career', 'celebrity', 'dev'];

function jokeBuilder(category: string) {
  return {
    categories: [category],
    created_at: faker.date,
    icon_url: faker.internet.avatar,
    id: faker.datatype.uuid(),
    url: 'https://api.chucknorris.io/jokes',
    value: faker.lorem,
  };
}

export { categories, jokeBuilder };

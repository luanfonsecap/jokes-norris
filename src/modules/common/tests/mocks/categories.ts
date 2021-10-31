const categories = ['animal', 'career', 'celebrity', 'dev'];

function jokeBuilder(category: string) {
  return {
    categories: [category],
    created_at: new Date().toISOString(),
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: '1',
    url: 'https://api.chucknorris.io/jokes',
    value: 'Chuck Norris Joke',
  };
}

export { categories, jokeBuilder };

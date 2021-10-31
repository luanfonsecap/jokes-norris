import { rest, RestRequest, ResponseFunction, RestContext } from 'msw';

import { categories, jokeBuilder } from './categories';

const handlers = [
  rest.get(
    `https://api.chucknorris.io/jokes/categories`,
    (req: RestRequest, res: ResponseFunction, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(categories));
    },
  ),
  rest.get(
    `https://api.chucknorris.io/jokes/random`,
    (req: RestRequest, res: ResponseFunction, ctx: RestContext) => {
      const category = req.url.searchParams.get('category') || '';

      return res(ctx.status(200), ctx.json(jokeBuilder(category)));
    },
  ),
];

export { handlers };

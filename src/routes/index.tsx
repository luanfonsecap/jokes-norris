import HomeRoutes from '../modules/Home/routes';
import JokeRoutes from '../modules/Joke/routes';
import { RouteWithSubRoutesProps } from './RouteWithSubRoutes';

const ROUTES: RouteWithSubRoutesProps[] = [...HomeRoutes, ...JokeRoutes];

export default ROUTES;

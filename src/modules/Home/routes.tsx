import { RouteWithSubRoutesProps } from '../../routes/RouteWithSubRoutes';
import Home from './index';

const HomeRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/',
    key: 'HOME',
    exact: true,
    component: Home,
  },
];

export default HomeRoutes;

import RenderRoutes, { RenderRoutesProps } from '../../routes/RenderRoutes';
import { RouteWithSubRoutesProps } from '../../routes/RouteWithSubRoutes';
import { HomeErrorFallback } from '../common/errors/HomeErrorFallback';
import { WithChildren } from '../common/utils/WithChildren';
import Home from './index';

function HomeProviderRoutes({ children }: WithChildren) {
  return <HomeErrorFallback>{children}</HomeErrorFallback>;
}

const HomeRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/',
    key: 'HOME',
    exact: true,
    component: (props: RenderRoutesProps) => (
      <RenderRoutes {...props} provider={HomeProviderRoutes} />
    ),
    routes: [{ path: '/', key: 'HOME', component: Home }],
  },
];

export default HomeRoutes;

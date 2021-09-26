import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { WithChildren } from '../modules/common/utils/WithChildren';

import RouteWithSubRoutes, {
  RouteWithSubRoutesProps,
} from './RouteWithSubRoutes';

export type RenderRoutesProps = {
  routes: RouteWithSubRoutesProps[];
  provider?: React.ComponentType<WithChildren>;
};

function RenderRoutes({ routes, provider: Provider }: RenderRoutesProps) {
  return (
    <Switch>
      {routes.map(route => {
        if (Provider)
          return (
            <Provider>
              <RouteWithSubRoutes {...route} key={route.key} />
            </Provider>
          );
        return <RouteWithSubRoutes {...route} key={route.key} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default RenderRoutes;

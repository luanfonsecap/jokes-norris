import React from 'react';

import RenderRoutes, { RenderRoutesProps } from '../../routes/RenderRoutes';
import { RouteWithSubRoutesProps } from '../../routes/RouteWithSubRoutes';
import { WithChildren } from '../common/utils/WithChildren';
import { JokeProvider } from './hooks/useJoke';
import Joke from './index';

function JokeProviderRoutes({ children }: WithChildren) {
  return <JokeProvider>{children}</JokeProvider>;
}

const JokeRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/joke/:category',
    key: 'JOKE_CONTAINER',
    component: (props: RenderRoutesProps) => (
      <RenderRoutes {...props} provider={JokeProviderRoutes} />
    ),
    routes: [{ path: '/joke/:category', key: 'JOKE', component: Joke }],
  },
];

export default JokeRoutes;

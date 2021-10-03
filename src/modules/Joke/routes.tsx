import React from 'react';

import RenderRoutes, { RenderRoutesProps } from '../../routes/RenderRoutes';
import { RouteWithSubRoutesProps } from '../../routes/RouteWithSubRoutes';
import { JokeProvider } from './hooks/useJoke';
import Joke from './index';

const JokeRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/joke/:category',
    key: 'JOKE_CONTAINER',
    component: (props: RenderRoutesProps) => (
      <RenderRoutes {...props} provider={JokeProvider} />
    ),
    routes: [{ path: '/joke/:category', key: 'JOKE', component: Joke }],
  },
];

export default JokeRoutes;

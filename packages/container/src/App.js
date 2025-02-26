import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header';
import Progress from './components/Progress';

const AuthLazy = lazy(() => import('./components/Auth'));
const MarketingLazy = lazy(() => import('./components/Marketing'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'ca'
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}

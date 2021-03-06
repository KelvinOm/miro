/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/miro/build/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

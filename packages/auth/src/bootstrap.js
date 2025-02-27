import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App'

const mount = (el, { onNavigate = () => {}, initialPath, onSignIn }) => {
  let history;
  if (process.env.NODE_ENV === 'development') {
    history = createBrowserHistory();
  
    history.listen(onNavigate);
  } else {
    history = createMemoryHistory({
      initialPath: [initialPath]
    });

    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#__auth-dev-root')
  if (el !== null) {
    mount(el, {})
  }
}

export { mount }

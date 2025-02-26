import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App'

const mount = (el, { onNavigate = () => {} }) => {
  let history;
  if (process.env.NODE_ENV === 'development') {
    history = createBrowserHistory();
  
    history.listen(onNavigate);
  } else {
    history = createMemoryHistory();
  
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#__marketing-dev-root')
  if (el !== null) {
    mount(el, {})
  }
}

export { mount }

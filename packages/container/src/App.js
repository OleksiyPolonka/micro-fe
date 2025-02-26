import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Marketing from './components/Marketing';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ca'
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Marketing />
      </BrowserRouter>
    </StylesProvider>
  )
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './components/global-style/global-style';
import AccountContextProvider from './contexts/account-context';
import FunctionContextProvider from './contexts/function-context';
import LoadingContextProvider from './contexts/loading-context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AccountContextProvider>
      <FunctionContextProvider>
        <LoadingContextProvider>
          <App />
        </LoadingContextProvider>
      </FunctionContextProvider>
    </AccountContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'src/App';
import reportWebVitals from 'src/reportWebVitals';
import { store } from 'src/stores';

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

reportWebVitals(console.info);

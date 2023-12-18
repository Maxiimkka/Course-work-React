import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Helmet>
        <title>FootGear</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Helmet>
      <App />
    </BrowserRouter>
  </Provider>
);



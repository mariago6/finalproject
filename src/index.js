import ReactDOM from 'react-dom/client';
import './index.css';
import AllRoutes from './application/routes';
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AllRoutes />
  </Provider>
);


import store from './app/store';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
      {/* //* Provider ile appimizi sarmalıyouruz. Aynı contextApi deki gibi store attr. ise app de yazdıgımız store u veriyoruz. */}
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;

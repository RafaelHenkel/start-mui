import { Provider } from 'react-redux';
import GlobalStyled from './config/GlobalStyled';
import DefaultTheme from './config/theme/DefaultTheme';
import ConfirmationModalProvider from './contexts/ConfirmationModalContext';
import ContactsProvider from './contexts/ContactsContext';
import TitleProvider from './contexts/TitleContext';
import UserProvider from './contexts/UserContext';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <ContactsProvider>
          <TitleProvider>
            <ConfirmationModalProvider>
              <DefaultTheme>
                <AppRoutes />
                <GlobalStyled />
              </DefaultTheme>
            </ConfirmationModalProvider>
          </TitleProvider>
        </ContactsProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

export default function ConnectApp(store, history, theme) {
  return function ConntectedApp(App) {
    const ProvidedApp = () => (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
    return ProvidedApp;
  };
}

import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from '@src/locale/messages';
import { GlobalStyles } from '@src/styles/globalStyles';
import { store } from '@src/redux/store';

interface AuthProvidersProps {
  children: React.ReactNode;
}

const resolveLocale = (): string => {
  const browserLocale = navigator.language.split('-')[0];
  return messages[browserLocale] ? browserLocale : 'en';
};

export const AuthProviders: React.FC<AuthProvidersProps> = ({ children }) => {
  const locale = resolveLocale();

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <GlobalStyles />
        {children}
      </IntlProvider>
    </Provider>
  );
};

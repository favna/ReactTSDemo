import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { ThemeProvider } from 'theming';

// @ts-ignore
export const testTheme: Theme = createMuiTheme({
  palette: {
    contrastThreshold: 3,
    error: {main: '#D52B1E'},
    primary: {main: '#0B71AB'},
    secondary: {main: '#F9E11E'},
    tonalOffset: 0.2,
    type: 'light',
  },
  typography: {
    fontFamily: [
      'rijksoverheidsanstext',
      'verdana',
      'arial',
      'sans-serif'
    ].join(','),
    fontSize: 'initial',
    useNextVariants: true,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
});

type componentProviderSetupOptions = {
  PrimaryComponent: any,
  SubComponent?: any,
  state?: object,
  componentProps?: object,
};

const testComponent: FC = () => <div/>;

export const componentWithProvidersSetup = (options: componentProviderSetupOptions) => {
  const mockStore = configureStore([]);
  const subComponent = options.SubComponent || testComponent;
  const state = options.state || {};
  const store: MockStoreEnhanced = mockStore({
    ...state,
  });

  const providerMount = mount(
    <Provider store={store}>
      <ThemeProvider theme={testTheme}>
        <options.PrimaryComponent {...options.componentProps}/>
      </ThemeProvider>
    </Provider>
  );

  return {
    providerMount,
    component: providerMount.find(subComponent),
    store,
  };
};

export default componentWithProvidersSetup;
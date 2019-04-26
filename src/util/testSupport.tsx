import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { mount, ReactWrapper } from 'enzyme';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
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

export const componentWithProvidersSetup = <P,S,C>(options: componentProviderSetupOptions) => {
  const subComponent = options.SubComponent || testComponent;
  const state = options.state || {};
  const store = configureMockStore([])({...state});

  const providerMount = mount(
    <Provider store={store}>
      <ThemeProvider theme={testTheme}>
        <options.PrimaryComponent {...options.componentProps}/>
      </ThemeProvider>
    </Provider>
  );

  return {
    providerMount,
    component: providerMount.find(subComponent) as unknown as ReactWrapper<P, S, C>,
    store,
  };
};

export default componentWithProvidersSetup;
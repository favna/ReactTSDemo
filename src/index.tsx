import { createGenerateClassName, createMuiTheme, jssPreset, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import App from './App';
import { create } from 'jss';
import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from 'src/redux/config';
import 'src/styles/styles.scss';

// @ts-ignore
const createTheme: Theme = createMuiTheme({
    palette: {
        contrastThreshold: 3,
        error: { main: '#D52B1E' },
        primary: { main: '#0B71AB' },
        secondary: { main: '#F9E11E' },
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

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: document.querySelector('#jss-insertion-point') as HTMLElement,
});

const initialState = {} as any;
const store = configureStore(initialState);

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={createTheme}>
                <App />
            </MuiThemeProvider>
        </JssProvider>
    </Provider>,
    target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

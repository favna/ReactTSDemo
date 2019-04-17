import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expectSaga } from 'redux-saga-test-plan';

configure({adapter: new Adapter()});
expectSaga.DEFAULT_TIMEOUT = 500;

export default undefined;
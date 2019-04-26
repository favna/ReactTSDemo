import ConnectedContainerComponent, { ContainerComponent, ContainerComponentProps } from 'components/ContainerComponent';
import { ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';
import { ApplicationState } from 'store';
import { decrement, decrementAsync, increment, incrementAsync } from 'store/actions';
import componentWithProvidersSetup from 'util/testSupport';


let containerComponent: ReactWrapper<ContainerComponentProps, any, any>;
let store: MockStoreEnhanced;

const mountAndSetup = () => {
  const state: ApplicationState = {
    app: {
      count: 0,
    },
  };

  const providedComponent = componentWithProvidersSetup<ContainerComponentProps, any, any>({ PrimaryComponent: ConnectedContainerComponent, SubComponent: ContainerComponent, state });
  containerComponent = providedComponent.component;
  store = providedComponent.store;
};

describe('ConnectedContainerComponent', () => {
  beforeEach(() => mountAndSetup());

  test('should dispatch Increment when clicking increment button', () => {
    const incrementButton = containerComponent.find('Button[data-qa="increment"]');

    incrementButton.simulate('click');

    expect(store.getActions()).toContainEqual(increment(1));
  });

  test('should dispatch IncrementAsync when clicking increment-async button', () => {
    const incrementAsyncButton = containerComponent.find('Button[data-qa="increment-async"]');

    incrementAsyncButton.simulate('click');

    expect(store.getActions()).toContainEqual(incrementAsync(1));
  });

  test('should dispatch Decrement when clicking decrement button', () => {
    const decrementButton = containerComponent.find('Button[data-qa="decrement"]');

    decrementButton.simulate('click');

    expect(store.getActions()).toContainEqual(decrement(1));
  });

  test('should dispatch DecrementAsync when clicking decrement-async button', () => {
    const decrementAsyncButton = containerComponent.find('Button[data-qa="decrement-async"]');

    decrementAsyncButton.simulate('click');

    expect(store.getActions()).toContainEqual(decrementAsync(1));
  });
});
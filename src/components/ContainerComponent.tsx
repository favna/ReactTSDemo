import Button from './MaterialComponent';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from 'store';
import { decrement, decrementAsync, increment, incrementAsync } from 'store/actions';

export type ContainerComponentProps = {
  count: number;
  increment (amount: number): void;
  decrement (amount: number): void;
  incrementAsync (amount: number): void;
  decrementAsync (amount: number): void;
};

export const ContainerComponent: FC<ContainerComponentProps> = props => {
  return (
    <Fragment>
      <h1>store count: {props.count}</h1>
      <div className='container-div'>
        <Button variant='contained' color='primary' dataQa='increment' label='Increment' onClick={() => props.increment(1)} />
        <Button variant='contained' color='primary' dataQa='increment-async' label='Increment Async' onClick={() => props.incrementAsync(1)} />
        <Button variant='contained' color='primary' dataQa='decrement' label='Decrement' onClick={() => props.decrement(1)} />
        <Button variant='contained' color='primary' dataQa='decrement-async' label='Decrement Async' onClick={() => props.decrementAsync(1)} />
      </div>
    </Fragment>
  );
};

export const mapStateToProps = (state: ApplicationState) => ({
  count: state.app.count,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      increment,
      decrement,
      incrementAsync,
      decrementAsync,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent);
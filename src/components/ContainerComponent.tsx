import React, { Component, FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from 'src/redux';
import { decrement, decrementAsync, increment, incrementAsync } from 'src/redux/actions';

type Props = {
    count: number;
    increment (amount?: number): void;
    decrement (amount?: number): void;
    incrementAsync (amount?: number): void;
    decrementAsync (amount?: number): void;
};

export const ContainerComponent: FC<Props> = props => {
    return (
        <Fragment>
            <h1>store count: {props.count}</h1>
            <div className='container-div'>
                <button className='container' onClick={() => props.increment}>Increment</button>
                <button className='container' onClick={() => props.incrementAsync}>Increment Async</button>
                <button className='container' onClick={() => props.decrement}>Decrement</button>
                <button className='container' onClick={() => props.decrementAsync}>Decrement Async</button>
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
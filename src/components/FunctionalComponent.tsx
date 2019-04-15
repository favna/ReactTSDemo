import React, { FC, Fragment } from 'react';

type Props = {
    title: string;
    subtitle: string;
};

const FunctionalComponent: FC<Props> = props => {
    return (
        <Fragment>
            <h1>{props.title}
                <small>{props.subtitle}</small>
            </h1>
        </Fragment>
    );
};

export default FunctionalComponent;
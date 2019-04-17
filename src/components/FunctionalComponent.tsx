import React, { FC, Fragment } from 'react';

type Props = {
  title: string;
  subtitle: string;
};

const FunctionalComponent: FC<Props> = props => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <small>{props.subtitle}</small>
    </Fragment>
  );
};

export default FunctionalComponent;
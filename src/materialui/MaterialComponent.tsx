import MUIButton, { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from 'styles/modules/Button.module.scss';

type Props = {
  label: React.ReactNode;
  customClasses?: string | string[];
  dataQa?: string;

  onClick (): any;
};

const Button: FC<Props & MUIButtonProps> = props => {
  return (
    <MUIButton
      onClick={props.onClick}
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      className={classnames(props.customClasses)}
      classes={{root: css.rwsButton, label: css.rwsButtonLabel}}
      data-qa={props.dataQa}
    >
      {props.label}
    </MUIButton>
  );
};

export default Button;
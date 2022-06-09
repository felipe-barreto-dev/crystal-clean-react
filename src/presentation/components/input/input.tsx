import React from 'react';
import Styles from './input-styles.scss';

type Props = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
};

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };
  return (
    <div className={Styles.inputWrap}>
      <input
        readOnly
        onFocus={enableInput}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
      <span className={Styles.status}>{props.icon}</span>
    </div>
  );
};

export default Input;

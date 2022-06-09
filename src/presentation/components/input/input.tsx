import React from 'react';
import Styles from './input-styles.scss';

type Props = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
};

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input type={props.type} name={props.name} placeholder={props.placeholder} />
      <span className={Styles.status}>{props.icon}</span>
    </div>
  );
};

export default Input;

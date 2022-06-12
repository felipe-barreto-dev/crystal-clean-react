import React, { useContext } from 'react';
import Styles from './input-styles.scss';
import Context from '@/presentation/contexts/form/form-context';

type Props = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
};

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context);
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className={Styles.inputWrap}>
      <input
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      <span className={Styles.status}>{props.icon}</span>
    </div>
  );
};

export default Input;

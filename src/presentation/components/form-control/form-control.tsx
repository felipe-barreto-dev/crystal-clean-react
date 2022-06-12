import React, { useContext } from 'react';
import Styles from './form-control-styles.scss';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/contexts/form/form-context';

type Props = {
  buttonText: string;
  buttonStyle: string;
  spinnerStyle: string;
};

const FormControl: React.FC<Props> = (props: Props) => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div className={Styles.formControlWrap}>
      {isLoading ? (
        <Spinner customStyle={props.spinnerStyle} />
      ) : (
        <button className={[Styles.button, props.buttonStyle].join(' ')} type="submit">
          {props.buttonText}
        </button>
      )}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default FormControl;

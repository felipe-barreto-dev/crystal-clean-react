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
  const { state } = useContext(Context);
  const { isLoading, errorMessage } = state;
  return (
    <div className={Styles.formControlWrap}>
      {isLoading ? (
        <Spinner customStyle={props.spinnerStyle} />
      ) : (
        <button
          data-testid="submit"
          className={[Styles.button, props.buttonStyle].join(' ')}
          type="submit">
          {props.buttonText}
        </button>
      )}
      {errorMessage && (
        <span data-testid="error-message" className={Styles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormControl;

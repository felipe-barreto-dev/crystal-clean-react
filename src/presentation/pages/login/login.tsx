import React, { useState, useEffect } from 'react';
import Styles from './login-styles.scss';
import { LoginHeader, Input, Footer, FormControl } from '@/presentation/components';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import Context from '@/presentation/contexts/form/form-context';
import { Validation } from '@/presentation/protocols/validation';
import colors from '../../styles/colors.scss'; // without alias to avoid jest errors

type Props = {
  validation: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    errorMessage: '',
    email: ''
  });

  useEffect(() => {
    if (validation) validation.validate({ email: state.email });
  }, [state.email]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            icon={<MailIcon color={colors.background} />}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={<VisibilityOffIcon color={colors.background} />}
          />
          <FormControl
            buttonText={'Login'}
            buttonStyle={Styles.submit}
            spinnerStyle={Styles.customSpinner}
          />
          <span className={Styles.link}>Create Account</span>
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;

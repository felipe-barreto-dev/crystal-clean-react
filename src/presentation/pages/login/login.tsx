import React, { useState } from 'react';
import Styles from './login-styles.scss';
import { LoginHeader, Input, Footer, FormControl } from '@/presentation/components';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import Context from '@/presentation/contexts/form/form-context';
import colors from '../../styles/colors.scss'; // without alias to avoid jest errors

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  });
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
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

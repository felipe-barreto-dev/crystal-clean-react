import React, { useState, useEffect } from 'react';
import colors from '../../styles/colors.scss'; // without alias to avoid jest errors
import Styles from './login-styles.scss';
import { LoginHeader, Input, Footer, FormControl } from '@/presentation/components';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import Context from '@/presentation/contexts/form/form-context';
import { Validation } from '@/presentation/protocols/validation';
import { Authentication } from '@/domain/usecases';

type Props = {
  validation: Validation;
  authentication: Authentication;
};

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    errorMessage: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (validation) {
      setState({
        ...state,
        errorMessage: validation.validate('email', state.email)
      });
    }
  }, [state.email, state.password]);

  useEffect(() => {
    if (validation) {
      setState({
        ...state,
        errorMessage: validation.validate('password', state.password)
      });
    }
  }, [state.password]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setState({
      ...state,
      isLoading: true
    });
    await authentication.auth({ email: state.email, password: state.password });
  };

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
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

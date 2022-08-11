import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import colors from '../../styles/colors.scss'; // without alias to avoid jest errors
import Styles from './login-styles.scss';
import { LoginHeader, Input, Footer, FormControl } from '@/presentation/components';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import Context from '@/presentation/contexts/form/form-context';
import { Validation } from '@/presentation/protocols/validation';
import { Authentication, SaveToStorage } from '@/domain/usecases';

type Props = {
  validation: Validation;
  authentication: Authentication;
  storage: SaveToStorage;
};

const Login: React.FC<Props> = ({ validation, authentication, storage }: Props) => {
  const navigate = useNavigate();
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

    try {
      if (state.isLoading || state.errorMessage) {
        return;
      }

      setState({ ...state, isLoading: true });

      const account = await authentication.auth({
        email: state.email,
        password: state.password
      });

      await storage.save(`${account.userName}`, account);
      navigate('/');
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        errorMessage: error.message
      });
    }
  };

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
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
          <Link data-testid="signup" to={'/signup'} className={Styles.link}>
            Create Account
          </Link>
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;

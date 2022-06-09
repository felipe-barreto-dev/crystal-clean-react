import React from 'react';
import Styles from './login-styles.scss';
import { LoginHeader, Input, Footer } from '@/presentation/components';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import colors from '@/presentation/styles/colors.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
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
        <button className={Styles.submit} type="submit">
          Login
        </button>
        <span className={Styles.link}>Create Account</span>
      </form>
      <Footer />
    </div>
  );
};

export default Login;

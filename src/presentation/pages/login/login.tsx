import React from 'react';
import Styles from './login-styles.scss';
import Header from '@/presentation/components/login-header/login-header';
import Input from '@/presentation/components/input/input';
import Footer from '@/presentation/components/footer/footer';
import { MailIcon, VisibilityOffIcon } from '@/assets/svg/';
import colors from '@/presentation/styles/colors.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          icon={<MailIcon color={colors.primary} />}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={<VisibilityOffIcon color={colors.primary} />}
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

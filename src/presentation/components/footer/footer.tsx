import React, { memo } from 'react';
import Styles from './footer-styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <h1>Clean Architecture @ 2022</h1>
    </footer>
  );
};

export default memo(Footer);

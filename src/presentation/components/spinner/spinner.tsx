import React from 'react';
import Styles from './spinner-styles.scss';

type Props = {
  customStyle: string;
};

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div className={[Styles.spinner, props.customStyle].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;

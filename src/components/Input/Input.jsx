import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';

const Input = (props) => {
  const { className, placeholder, type = 'text' } = props;

  return (
    <input
      className={cx(s.root, className)}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};
Input.propTypes = {
  className: string,
  type: string,
  placeholder: string,
};

export default Input;

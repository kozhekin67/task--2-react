import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';

const Input = (props) => {
  const { className, placeholder, type = 'text', text } = props;

  return (
    <input
      {...props}
      className={cx(s.root, className)}
      value={text}
      placeholder={placeholder}
      type={type}
    />
  );
};
Input.propTypes = {
  className: string,
  type: string,
  placeholder: string,
  onСhange: func,
  value: string,
};

export default Input;

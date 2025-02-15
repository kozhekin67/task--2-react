import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';

const Input = (props) => {
  const { className, placeholder } = props;

  return (
    <input
      {...props}
      className={cx(s.root, className)}
      placeholder={placeholder}
    />
  );
};
Input.propTypes = {
  className: string,
  type: string,
  placeholder: string,
  id: string,
  text: string,
  onСhange: func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;

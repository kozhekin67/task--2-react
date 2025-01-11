import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({ className, type, text, image, onClick }) => {
  return (
    <button
      className={cx(s.root, className)}
      type={type} // eslint-disable-line
      onClick={onClick}
    >
      {text}
      {image}
    </button>
  );
};

Button.propTypes = {
  className: string,
  type: string,
  text: string,
  image: React.FC,
  onClick: func,
};
Button.defaultProps = {
  type: 'button',
};

export default Button;

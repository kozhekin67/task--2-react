import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Checkbox.module.scss';

const Checkbox = ({ className, id, onchange, checked, type = 'checkbox' }) => {
  return (
    <input
      id={id}
      type={type}
      className={cx(s.root, className)}
      onChange={onchange}
      checked={checked}
    />
  );
};

Checkbox.propTypes = {
  className: string,
  id: string,
};

export default Checkbox;

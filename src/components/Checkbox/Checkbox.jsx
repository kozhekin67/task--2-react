import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Checkbox.module.scss';

const Checkbox = ({ className, id, onchange, checked }) => {
  return (
    <input
      id={id}
      type="checkbox"
      className={cx(s.root, className)}
      onChange={onchange}
      checked={checked}
    />
  );
};

Checkbox.propTypes = {
  className: string,
  id: 'string',
};

Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;

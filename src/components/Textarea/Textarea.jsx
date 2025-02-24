import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Textarea.module.scss';

const Textarea = (props) => {
  const { className, value, type = 'text' } = props;
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(value.length, value.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <textarea
      ref={textareaRef}
      {...props}
      className={cx(s.root, className)}
      type={type}
    />
  );
};

Textarea.propTypes = {
  className: string,
  value: string,
};

export default Textarea;

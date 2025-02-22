import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import s from './Textarea.module.scss';

const Textarea = (props) => {
  const { className, value } = props;
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(value.length, value.length);
    }
  }, [value]);

  return (
    <textarea ref={textareaRef} {...props} className={cx(s.root, className)} />
  );
};

Textarea.propTypes = {
  className: string,
};

Textarea.defaultProps = {
  type: 'text',
};

export default Textarea;

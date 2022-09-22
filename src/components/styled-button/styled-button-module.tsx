import { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './styled-button.module.css';

export const StyledButtonModule = (
  props: ComponentPropsWithoutRef<'button'> & {
    children: ReactNode;
    primary?: boolean;
  }
) => {
  const { primary, children, ...rest } = props;
  return (
    <button className={primary ? styles.primary : styles.default} {...rest}>
      {children}
    </button>
  );
};

import { PropsWithChildren } from 'react';
import classes from './LayoutContainer.module.scss';

export interface LayoutContainerProps {
  className?: string | undefined;
  role?: string;
  Tag?: keyof JSX.IntrinsicElements;
}

export const LayoutContainer = ({
  children,
  className = '',
  role,
  Tag = 'div',
}: PropsWithChildren<LayoutContainerProps>): JSX.Element => (
  <Tag className={`${classes.root} ${className}`} role={role}>
    {children}
  </Tag>
);

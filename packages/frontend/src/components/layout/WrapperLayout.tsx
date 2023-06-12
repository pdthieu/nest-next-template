import { Fragment } from 'react';

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export const WrapperLayout = ({ children }: WrapperLayoutProps) => {
  return <Fragment>{children}</Fragment>;
};

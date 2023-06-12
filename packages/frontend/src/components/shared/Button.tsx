import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { LoadingIcon } from './icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = ({
  className,
  children,
  isLoading,
  isDisabled,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={twMerge(
        classNames(
          `flex hover:opacity-90 active:scale-90 transition-all duration-300 ease-in-out flex-row justify-center items-center bg-sudope-orange text-white font-[600] p-[10px] rounded-full px-6 select-none`,
          {
            'cursor-not-allowed pointer-events-none': isLoading || isDisabled,
            'opacity-50': isDisabled,
          },
        ),
        className,
      )}
      {...rest}
    >
      {isLoading ? <LoadingIcon /> : <>{children}</>}
    </button>
  );
};

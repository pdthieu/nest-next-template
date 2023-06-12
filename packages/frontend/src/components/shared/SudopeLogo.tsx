import classNames from 'classnames';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

interface SudopeLogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const SudopeLogo = ({ className }: SudopeLogoProps) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(classNames(`bg-sudope-red p-6 cursor-pointer`, className))}
      onClick={() => router.push('/')}
    >
      <img
        className="pointer-events-none h-[40px]"
        src="/images/icons/sudope.png"
        alt="Sudope Logo"
      />
    </div>
  );
};

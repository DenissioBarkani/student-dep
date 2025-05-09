import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto px-4 max-w-[1408px]', className)}>{children}</div>;
};

//  return <div className={cn('mx-auto px-5 max-w-[1320px]', className)}>{children}</div>;
//   return <div className={cn('mx-auto px-5 max-w-[1472px]', className)}>{children}</div>;
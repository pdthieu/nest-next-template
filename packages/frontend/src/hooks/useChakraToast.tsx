import React, { useCallback } from 'react';
import { ToastOptions, useToast } from '@chakra-ui/react';

import { Toast } from '@components/shared';

type UseChakraToastOptions = {
  defaultDuration: number;
};

type ChakraToastOptions = {
  status?: ToastOptions['status'];
  title: string;
  message?: string;
  duration?: number;
};

export const useChakraToast = (
  { defaultDuration }: UseChakraToastOptions = { defaultDuration: 3500 },
) => {
  const toast = useToast();

  return useCallback(
    (options: ChakraToastOptions) => {
      const { status = 'default', title, message, duration = defaultDuration } = options;
      const id = [title, message].join('|');
      if (!toast.isActive(id)) {
        setTimeout(
          () =>
            toast({
              id,
              position: 'top',
              duration,
              render: () => (
                <Toast status={status} message={title} onClose={() => toast.closeAll()} />
              ),
            }),
          250,
        );
      }
    },
    [toast, defaultDuration],
  );
};

export default useChakraToast;

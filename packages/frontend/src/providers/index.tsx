import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WrapperLayout } from '@components/layout';
import MaintenanceUI from '@components/ui/Maintenance';

interface ProviderProps {
  children: React.ReactNode;
  pageProps: any;
}

const Provider = ({ children, pageProps }: ProviderProps) => {
  const qcRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={qcRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <MaintenanceUI>
          <WrapperLayout>{children}</WrapperLayout>
        </MaintenanceUI>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default Provider;

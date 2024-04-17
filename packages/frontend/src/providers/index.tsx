import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProviderProps {
  children: React.ReactNode;
  pageProps: any;
}

const Provider = ({ children }: ProviderProps) => {
  const qcRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    }),
  );

  return <QueryClientProvider client={qcRef.current}>{children}</QueryClientProvider>;
};

export default Provider;

import type { NextPage } from 'next';

import { Metadata } from '@components/shared';
import { HomeScreen } from '@components/ui';

const Home: NextPage = () => {
  return (
    <>
      <Metadata title="Sudope" />
      <HomeScreen />
    </>
  );
};

export default Home;

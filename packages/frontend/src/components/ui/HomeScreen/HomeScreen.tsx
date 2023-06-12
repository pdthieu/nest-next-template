import { FixedSocialButtons, SudopeLogo } from '@components/shared';

import ExploreCollectFlex from './ExploreCollectFlex';
import FixedJoystickButton from './FixedJoystickButton';
import StayInLoop from './StayInLoop';
import SudopeDescription from './SudopeDescription';

export const HomeScreen = () => {
  return (
    <div id="home">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="relative overflow-hidden flex flex-col h-screen bg-black bg-no-repeat bg-cover bg-sudope-home">
        <div id="home-top-bar" className="absolute flex">
          <SudopeLogo className="py-4" />
        </div>
        <div id="home-content" className="flex flex-col items-center justify-center flex-1">
          <ExploreCollectFlex />
        </div>
        <FixedSocialButtons />
        <FixedJoystickButton />
      </div>
      <div className="flex flex-col relative min-h-[65rem] bg-black overflow-hidden">
        <SudopeDescription />
        <StayInLoop />
      </div>
    </div>
  );
};

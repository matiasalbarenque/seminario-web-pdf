import { Page } from '@components/Page';
import uadeLogo from '@assets/img/uade-logo.svg';

export const Page1Intro = () => {
  return (
    <Page>
      <img src={uadeLogo} className="absolute w-52 h-auto top-4 right-4" />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h1 className="text-8xl font-semibold leading-normal bg-gradient-to-r from-primary-500 via-primary-800 to-primary-700 text-transparent bg-clip-text">
          EasyTerms
        </h1>
      </div>
    </Page>
  );
};

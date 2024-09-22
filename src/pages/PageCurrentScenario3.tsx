import { Page } from '@/components/Page';
import persona3 from '@/assets/img/current-scenario/persona3.svg';

export const PageCurrentScenario3 = () => {
  return (
    <Page>
      <div className="mt-8">
        <img src={persona3} className="w-full z-10 drop-shadow" />
      </div>
    </Page>
  );
};

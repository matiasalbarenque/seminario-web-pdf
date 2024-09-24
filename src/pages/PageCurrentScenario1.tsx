import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import persona1 from '@/assets/img/current-scenario/persona1.svg';

export const PageCurrentScenario1 = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="Escenario Actual" />
      </div>
      <div>
        <img src={persona1} className="w-full z-10" />
      </div>
    </Page>
  );
};

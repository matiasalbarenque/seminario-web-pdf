import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import prioritizationGrid from '@/assets/img/prioritization-grid/prioritization-grid.svg';

export const PrioritizationGrid = () => {
  return (
    <Page>
      <div className="w-full mb-6 text-center">
        <PageTitle text="Grilla de priorización" />
      </div>
      <div className="flex justify-center">
        <img src={prioritizationGrid} className="w-full z-10 drop-shadow" />
      </div>
    </Page>
  );
};

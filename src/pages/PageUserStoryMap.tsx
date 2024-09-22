import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import dashboard from '@/assets/img/user-story-map/dashboard.svg';

export const PageUserStoryMap = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="User Story Map" />
      </div>
      <div>
        <img src={dashboard} className="w-full z-10 drop-shadow" />
      </div>
    </Page>
  );
};

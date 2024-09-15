import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';

export const PageUserPersona1 = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="User Persona" />
      </div>
      <UserPersona {...usersPersona[0]} />
    </Page>
  );
};

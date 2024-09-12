import { Page } from '@components/Page';
import { PageTitle } from '@components/PageTitle';
import { UserPersona } from '@components/UserPersona';
import usersPersona from '@assets/mocks/usersPersona.json';

export const Page2 = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="User Persona" />
      </div>
      {usersPersona.map(a => (
        <UserPersona key={a.fullname} {...a} />
      ))}
    </Page>
  );
};

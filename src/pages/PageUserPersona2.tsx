import { Page } from '@/components/Page';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';

export const PageUserPersona2 = () => {
  return (
    <Page>
      <UserPersona {...usersPersona[1]} />
    </Page>
  );
};

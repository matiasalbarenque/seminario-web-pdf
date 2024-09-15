import { Page } from '@/components/Page';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';

export const PageUserPersona3 = () => {
  return (
    <Page>
      <UserPersona {...usersPersona[2]} />
    </Page>
  );
};

import { Page } from '@/components/Page';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';
import empathyMapPersona2 from '@/assets/img/users-persona/persona2.svg';

export const Page10UserPersona = () => {
  return (
    <Page>
      <UserPersona {...usersPersona[1]} />
      <div className="flex justify-center">
        <img src={empathyMapPersona2} className="w-[calc(88%)] z-10 drop-shadow" />
      </div>
    </Page>
  );
};

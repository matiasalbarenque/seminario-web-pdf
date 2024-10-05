import { Page } from '@/components/Page';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';
import empathyMapPersona3 from '@/assets/img/users-persona/persona3.svg';

export const Page11UserPersona = () => {
  return (
    <Page>
      <UserPersona {...usersPersona[2]} />
      <div className="flex justify-center">
        <img src={empathyMapPersona3} className="w-[calc(88%)] z-10 drop-shadow" />
      </div>
    </Page>
  );
};

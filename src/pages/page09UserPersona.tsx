import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { UserPersona } from '@/components/UserPersona';
import usersPersona from '@/assets/mocks/usersPersona.json';
import empathyMapPersona1 from '@/assets/img/users-persona/persona1.svg';

export const Page09UserPersona = () => {
  return (
    <Page>
      <div className="w-full text-center">
        <PageTitle text="User Persona y Mapa de Empatía" />
      </div>
      <UserPersona {...usersPersona[0]} />
      <div className="flex justify-center">
        <img src={empathyMapPersona1} className="w-[calc(78%)] z-10 drop-shadow" />
      </div>
    </Page>
  );
};

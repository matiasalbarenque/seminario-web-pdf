import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import fingerprint from '@/assets/img/user-segmentation/intro/fingerprint.svg';
import shield from '@/assets/img/user-segmentation/intro/shield.svg';

export const PageProblem = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Problema" />
      </div>
      <div className="mb-36 flex gap-6">
        <div className="flex-[2]">
          <img src={fingerprint} alt="fingerprint" className="absolute scale-125" />
          <img src={shield} alt="shield" className="absolute w-60 right-4 bottom-0" />
        </div>
        <div className="flex-[3] flex flex-col gap-4">
          <h3 className="text-[140px] font-squada-one leading-[0.75] uppercase">Riesgos</h3>
          <h3 className="mb-10 text-[84px] font-squada-one leading-[0.6] uppercase">de los T&C</h3>
          <h4 className="text-4xl font-semibold leading-tight text-cyan-500">
            Segmentación de usuarios & Mercado target
          </h4>
        </div>
      </div>
      <h3 className="mb-6 text-8xl font-squada-one leading-none uppercase">Terminos & condiciones interminables</h3>
      <div className="mb-4 text-2xl font-medium text-cyan-600">
        Crear cuentas en diversos sitios web para acceder a servicios y plataformas en línea. Este proceso, que a menudo
        parece rutinario, conlleva riesgos significativos para la privacidad de los usuarios. Al registrarse, se
        requiere que los usuarios proporcionen información personal, como su correo electrónico y una contraseña, además
        de aceptar términos y condiciones que muchas veces no son revisados en detalle. Al utilizar su correo personal,
        los usuarios se exponen a recibir una avalancha de correos no deseados, incluyendo publicidad no solicitada,
        intentos de estafa y otros tipos de spam. Estos riesgos no solo comprometen la experiencia en línea de los
        usuarios, sino que también representan una amenaza a su seguridad digital y privacidad.
      </div>
      <div className="text-2xl font-medium text-cyan-600">
        Frente a esta problemática, surge la necesidad de encontrar soluciones que permitan a los usuarios proteger
        mejor su información personal al mismo tiempo que simplifican el tedioso proceso de registros repetitivos.
        Identificar y abordar esta necesidad es crucial para mejorar la seguridad y confianza de los usuarios en la
        utilización de plataformas digitales.
      </div>
    </Page>
  );
};

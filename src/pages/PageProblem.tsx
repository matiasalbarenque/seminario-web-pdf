import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Stain1 } from '@/components/PageBackground';

export const PageProblem = () => {
  return (
    <Page>
      <div className="w-full mb-2 text-center">
        <PageTitle text="Problema" />
      </div>

      <div className="text-center">
        <h3 className="text-6xl font-light font-open-sans leading-tight uppercase">
          Riesgos de los
          <br />
          Términos y Condiciones
        </h3>
      </div>

      <div className="w-full flex justify-center">
        <div className="my-6 w-72 h-[2px] bg-primary-600" />
      </div>

      <p className="text-xl font-medium font-open-sans leading-relaxed text-slate-800 tracking-wide text-justify">
        Normalmente los usuarios de servicios digitales tienen que proporcionar información personal y aceptar Términos
        y Condiciones que son difíciles de comprender para la gente común, por ende, suelen aceptarse sin ser leídos.
        Esto conlleva un riesgo muy grande con respecto a la protección de los datos entre otras implicancias legales.
      </p>

      <div className="flex">
        <div>
          <p className="text-lg font-medium font-open-sans text-justify leading-relaxed text-slate-800">
            Crear cuentas en diversos sitios web para acceder a servicios y plataformas en línea. Este proceso, que a
            menudo parece rutinario, conlleva riesgos significativos para la privacidad de los usuarios. Al registrarse,
            se requiere que los usuarios proporcionen información personal, como su correo electrónico y una contraseña,
            además de aceptar términos y condiciones que muchas veces no son revisados en detalle. Al utilizar su correo
            personal, los usuarios se exponen a recibir una avalancha de correos no deseados, incluyendo publicidad no
            solicitada, intentos de estafa y otros tipos de spam. Estos riesgos no solo comprometen la experiencia en
            línea de los usuarios, sino que también representan una amenaza a su seguridad digital y privacidad.
          </p>
        </div>
        <div className="min-w-96 flex justify-center items-center">
          <Stain1 className="absolute scale-110 opacity-40" />
          <img src="/img/security-concerns/hacking1.png" alt="hacking" className="w-80 mb-6" />
        </div>
      </div>
      <p className="mb-8 text-lg font-medium font-open-sans leading-relaxed text-slate-800">
        Frente a esta problemática, surge la necesidad de encontrar soluciones que permitan a los usuarios proteger
        mejor su información personal al mismo tiempo que simplifican el tedioso proceso de registros repetitivos.
        Identificar y abordar esta necesidad es crucial para mejorar la seguridad y confianza de los usuarios en la
        utilización de plataformas digitales.
      </p>
      <div className="flex gap-6 z-10">
        <div className="min-w-[340px]">
          <a
            href="https://www.diariocritico.com/internacional/muere-parque-disney-niegan-indemnizacion-marido-suscripcion-disney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/problem/news1.png"
              alt="news1"
              className="w-full p-2 bg-white border rounded shadow-sm hover:scale-105 hover:-rotate-1 transition-transform duration-500"
            />
          </a>
        </div>
        <div className="flex items-center">
          <p className="font-open-sans italic leading-relaxed">
            &quot;Kanokporn Tangsuan falleció en un hotel de Disney en Orlando debido a un fallo en el menú en 2023,
            pero su caso está teniendo una gran repercusión ahora. La mujer tenía alergias alimentarias y lo comunicó
            varias veces en la cena junto a su marido. Pero algo falló y acabó sufriendo una anafilaxia que derivó en su
            muerte. Su marido, Jeffrey Piccolo, denunció al conocido parque y exigió una indemnización de 50.000 dólares
            por el sufrimiento y la pérdida de ingresos, además de sufragar los gastos funerarios de su esposa.{' '}
            <span className="bg-primary-300 px-1 rounded-2xl">
              La polémica de ahora ha surgido de la respuesta de la empresa, que está intentando desestimar el caso
              basándose en una cláusula de la suscripción a Disney+ que Piccolo firmó años antes. La compañía quiere
              evitar el juicio y utiliza la suscripción a Disney+...
            </span>
            &quot;
          </p>
        </div>
      </div>
    </Page>
  );
};

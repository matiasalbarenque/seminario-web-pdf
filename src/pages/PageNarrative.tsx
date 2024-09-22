import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';

export const PageNarrative = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Narrativa" />
      </div>
      <div className="mx-16">
        <div className="mr-6 mb-6 flex gap-16">
          <div className="basis-72">
            <div className="p-8 flex aspect-square rounded-full bg-white overflow-hidden shadow">
              <img src="/img/document-2.png" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 font-open-sans text-xl font-medium text-slate-800 leading-[1.75]">
            <p>
              Compras de productos digitales que en realidad no te pertenecen, venta de tu información y hasta contenido
              digital que deja de ser tuyo, son algunos de los muchos derechos que los usuarios pierden a la hora de
              aceptar términos y condiciones en distintas plataformas.
            </p>
            <p>
              Nuestros estudios marcan que la mayoría de usuarios aceptan estas condiciones debido a que las empresas
              aprovechan el uso de “letra chica” y lenguaje enrevesado para el usuario común.
            </p>
          </div>
        </div>
        <div className="font-open-sans text-xl font-medium text-slate-800 leading-[1.75]">
          <p>
            Es por eso que nuestro equipo ha creado “EasyTerms”, una extensión compatible con la mayoría de navegadores,
            donde su principal foco es concientizar a los usuarios de los peligros que implica aceptar dichos términos.
            Ya sea transformando ese texto largo y complicado en algo más legible o advirtiendo sobre peligros
            previamente reportados por otros usuarios.
          </p>
          <p>
            El usuario de nuestra extensión podrá personalizar completamente su experiencia indicando sobre qué tópicos
            le interesaría ser informado y además podrá acceder a una versión paga donde podrá desplegar un chat donde
            podrá hacer sus consultas específicas a una IA entrenada.
          </p>
        </div>
      </div>
    </Page>
  );
};

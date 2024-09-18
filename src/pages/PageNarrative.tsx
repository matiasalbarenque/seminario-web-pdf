import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';

export const PageNarrative = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="Narrativa" />
      </div>
      <div className="text-xl font-semibold text-slate-800 leading-relaxed text-justify">
        <div className="mb-6 flex gap-8">
          <div className="flex-1">
            <p>
              EasyTerms es una extensión de Chrome diseñada para proteger tu privacidad a la hora de registrarte a
              sitios web. Esta herramienta facilita la comprension de los T&C a traves de la IA, te informa los
              antecedentes del sitio respecto a la fuga de informacion y te concientiza sobre las nuevas formas de
              estafa. El usuario podra personalizar su experiencia indicando a la extensión que topicos le interesa
              saber y en que casos debe alertarlo a la hora de registrarse en un sitio.
            </p>
            <p>
              La extension contara con una version paga que se conecte al servicio de asistencia y preguntas frecuentes
              y mediante intelegiencia artificial pueda suplir las necesidades del cliente en línea simulando ser un
              personal de ayuda técnica on-site.
              <br /> Además la versión paga podrá asistir al usuario con información acerca de filtración de datos
              personales también conectándose a servicios de terceros.
            </p>
          </div>
          <div className="basis-72">
            <div className="p-8 flex aspect-square rounded-full bg-white overflow-hidden shadow">
              <img src="/img/document-2.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

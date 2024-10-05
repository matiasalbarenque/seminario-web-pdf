import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Stain1 } from '@/components/PageBackground';

export const Page03Problem = () => {
  return (
    <Page>
      <div className="w-full flex justify-center mt-24">
        <div className="my-6 w-72 h-[2px] bg-primary-600" />
      </div>
      <p className="pStandard">
        Se pueden analizar varios factores desde varios puntos de vista. Se podría decir que el{' '}
        <b>Estado no está presente</b> a la hora de defender a sus ciudadanos; o que el Ministerio de Educación no
        concientiza los riesgos a temprana edad; o que no regula o aplica sanciones a las empresas que no cumplen con
        las normativas [2,3].
      </p>
      <p className="pStandard">
        Facilmente podrian <b>echarse culpas a las empresas</b> por la longitud excesiva [1,5,7] de estos
        documentos; el uso de un lenguaje jurídico difícil de entender [1,2] (frecuentemente
        traducido de otro idioma y/o de otro sistema legal) como también las prácticas poco amigables para el usuario
        como lo son la tendencia a cambiar y actualizarse tal como se actualizan las propias apps y la complejidad de
        seguir el hilo a la lectura de las cláusulas [2].
      </p>
      <p className="pStandard">Lejos de subestimar la capacidad de análisis del usuario, es importante destacar la
        necesidad de <b>tomar conciencia</b> sobre lo mencionado anteriormente. No deberíamos preocuparnos tanto por
        profundizar en la razonabilidad de los aspectos jurídicos y técnicos de un contrato, sino más bien empezar a
        darnos cuenta del <b>temor que debería surgir</b> de dicho desconocimiento. La gran mayoría de la población
        desconoce el acuerdo que acepta al registrarse en las aplicaciones de diversas empresas y pasa por alto la
        posibilidad de que al aceptarlas podría comprometer algo que considera valioso.
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

      <div className="flex gap-6 z-10">
        <div className="flex items-center">
          <p className="font-open-sans italic leading-relaxed">
            &quot;Una pareja sufrió un accidente automovilístico mientras viajaba en Uber, debido a la negligencia del conductor, pero <span className="bg-primary-300 px-1 rounded-2xl">no pueden demandar a la empresa ya que aceptaron un arbitraje vinculante al aceptar los términos y condiciones de la aplicación</span>. Según ellos, fue su hija menor de edad quien pulsó “aceptar”.

            El arbitraje vinculante implica que las partes renuncian a su derecho a llevar el caso a juicio, limitando sus opciones legales.
            &quot;
          </p>
        </div>

        <div className="min-w-[340px]">
          <a
            href="https://www.infobae.com/tecno/2024/10/04/accidente-en-uber-resulto-todo-un-caos-para-una-familia-esto-es-lo-que-no-sabes-de-los-viajes-por-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/problem/news2.png"
              alt="news1"
              className="w-full p-2 bg-white border rounded shadow-sm hover:scale-105 hover:-rotate-1 transition-transform duration-500"
            />
          </a>
        </div>
      </div>
    </Page>
  );
};

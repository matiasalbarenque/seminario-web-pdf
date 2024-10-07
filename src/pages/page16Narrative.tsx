import { Page } from '@/components/Page';

export const Page16Narrative = () => {
  return (
    <Page>
      <div className="w-full flex justify-center mb-10"></div>
      <p className="pStandard mt-28">
        Por el momento, para lograr estos perfiles, se nos ocurre consumir APIs de recursos externos como{' '}
        <a href="https://tosdr.org/" target="_blank">
          Terms of Service, Didn't Read
        </a>{' '}
        y{' '}
        <a href="https://haveibeenpwned.com/" target="_blank">
          Have i been pwned
        </a>
        . Con esta información se lograra hacer tres análisis, uno general del usuario, ponderando el grado de
        exposición en general y redactando un breve análisis. Los otros dos análisis serán más puntuales y estarán a la
        disposición del usuario si lo lee con detalle o no. Por un lado se brindará un resumen para cada aplicación y
        por otro se analizan las vulnerabilidades relacionadas con los correos que utilizó para crear las cuentas en
        todas sus aplicaciones.
      </p>
      <p className="pStandard">
        El análisis más puntual es para satisfacer la curiosidad del usuario. Queremos mostrar con distintos niveles de
        gravedad de cada aplicación, generando una sensación de inseguridad dependiendo de los términos y condiciones de
        cada aplicación o las filtraciones que sufrió en el pasado.
      </p>
      <p className="pStandard">
        En <b>conclusión</b>, la idea es despertar inquietud, temor y curiosidad en el usuario cuando utiliza nuestra
        app. El objetivo es lograr que lleve a una concientización del mal uso de sus datos, brindando información clara
        y precisa al alcance del usuario, pero sin bombardear con información.
      </p>
      <h3 className="mb-4 pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
        Funneling:
      </h3>
      <p className="pStandard">
        En un futuro, el producto tendrá una gran parte enfocada en educación y concientización, pensamos ofrecerle al
        usuario otros servicios como advertir si una contraseña fue vulnerada y poder actualizarla fácilmente. A su vez,
        esto nos brinda una oportunidad de negocio para concientizar a los usuarios sobre buenas prácticas respecto al
        manejo de contraseñas, ya que estará más motivado a aprender después de un episodio negativo. Y así con muchos
        otros tópicos (como brindar resúmenes de términos y condiciones, reportar sitios o aplicaciones por uso indebido de datos,
        informar sobre el grado de protección de su información, cursos de concientización de ciberseguridad, etc.).
      </p>
      <p className="pStandard">
        Otro punto a destacar es que en algún momento será inevitable necesitar más información de la que nos provee el
        internet (APIs públicas) y resultará necesario desarrollar nuestras propias bases de datos que podemos usar para
        mejorar nuestro servicio y brindarles como un servicio en sí (a los Ministerios de Educación y Legislación por
        ejemplo).
      </p>
      <h3 className="mb-4 pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
        Otros ejemplos del producto:
      </h3>
      <p className="pStandard">
        Va a ayudar a los usuarios a desinstalar aplicaciones que no tenía idea que comprometían un riesgo.
      </p>
      <p className="pStandard">
        Nuestro producto permite al usuario hacer un “trade off” a conciencia entre lo que una aplicación le brinda y el
        riesgo al que se expone.
      </p>
      <p className="pStandard">
        El usuario va a visualizar si su teléfono, mail, cuenta bancaria, etc. fue comprometida.
      </p>
      <p className="pStandard">
        Al agregar una nueva app a tu teléfono el usuario podrá analizar a través de la app para visualizar el grado de
        exposición.
      </p>
    </Page>
  );
};

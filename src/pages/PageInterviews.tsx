import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const PageInterviews = () => {
  return (
    <Page>
      <div className="w-full text-center">
        <PageTitle text="Entrevistas" />
      </div>
      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Julieta Zanazzi - Abogada Mg. Derecho de la Ciberseguridad y Entorno Digital
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                <p>
                  “La importancia es que el usuario empiece a entender que hay que proteger nuestros datos y que la info. A este tipo de empresas es plata y se lo estamos dando gratuito, y además que con nuestra info pueden hacer muchísimas cosas, privacidad, suplantación de identidad, cometer algún tipo de delito.”
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">

          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                <p>
                  Según las entrevistas, los términos y condiciones a menudo resultan incómodos para el usuario,
                  ya que su redacción técnica y extensa puede dificultar su comprensión. Se considera fundamental,
                  en el desarrollo de nuestra sociedad, que los comercios establezcan políticas claras y concisas,
                  limitándose a lo esencial y evitando complicaciones innecesarias. Además, es crucial conocer a
                  la empresa detrás de cada plataforma, asegurando que actúe con transparencia y responsabilidad.
                </p>
                <p>
                  Destacamos un tema de gran importancia: el Estado argentino tiene una responsabilidad considerable
                  en estas cuestiones y no está interviniendo como debería. Es necesario que haya una intervención
                  en casos como el de Worldcoin, para proteger a la población. Otro punto muy importante son los
                  menores, quienes no son conscientes de los riesgos que pueden asumir al aceptar términos y condiciones.
                </p>
                <p>
                  También es relevante valorar cómo Europa gestiona las cookies, ya que prioriza la privacidad del
                  usuario y promueve una mayor claridad sobre el uso de datos.
                </p>
                <p>
                  Finalmente, es importante recordar que cualquier información que se comparta en línea puede ser
                  difícil de eliminar por completo, lo que implica riesgos que pueden repercutir en la vida real.
                </p>

              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Edgardo Rodriguez - Jefe de Infraestructura en una compañia de dialisis.
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                <b>Servicios en línea utilizados:</b>
                <p>El entrevistado usa servicios en línea frecuentemente para acceder a soporte técnico, crear cuentas para servidores, virtualización, web hosting y DNS. Menciona que está constantemente creando cuentas para diferentes servicios.
                </p>
                <b>Lectura de Términos y Condiciones (TyC)
                </b>
                <p>
                Generalmente no los lee, salvo cuando una plataforma le genera desconfianza. En esos casos, hace un rápido análisis de los títulos antes de profundizar.
                </p>
                <b>Inseguridad en línea</b>
                <p>Le preocupa la vulnerabilidad de contraseñas, como alertas de Google Passwords Vault sobre filtraciones. Cambia sus contraseñas regularmente para mantener su seguridad.</p>

                <b>Encuesta, ¿Que le pareció?</b>
                <p>Al entrevistado le pareció sencilla y completa. Valora la simplicidad para evitar el abandono por complejidad.
                </p>
                <b>Evolución de la Sociedad y la Privacidad:</b>
                <p>En los últimos años, Edgardo percibe que la sociedad está saturada de información, lo que puede derivar en desinformación. Las empresas hacen TyC más complejos para protegerse, lo cual hace más difícil entender las consecuencias de aceptarlos.
                </p>
                <b>Medidas de protección</b>
                <p>El entrevistado utiliza contraseñas complejas, las almacena en un gestor cifrado y no las comparte. Clasifica sus cuentas según la seriedad de la empresa que las aloja. Considera usar correos virtuales y contraseñas únicas por cuenta como medidas adicionales para mejorar su seguridad.
                </p>

              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </Page>
  );
};

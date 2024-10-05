import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Page08Interviews = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="Entrevistas" />
      </div>
      <div className="flex flex-col gap-6">
        <Card className="flex-1 z-10">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Julieta Zanazzi - Abogada Mg. Derecho de la Ciberseguridad y Entorno Digital
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md text-slate-700 italic">
                &quot;La importancia es que el usuario empiece a entender que tenemos que proteger nuestros datos. Para
                las empresas los datos significan dinero y se lo estamos dando de forma gratuita, además con nuestra
                información pueden hacer muchísimas cosas inapropiadas como, por ejemplo, suplantación de identidad,
                intrusión a la privacidad, cometer algún tipo de delito, etc.&quot;
              </div>
            </div>
            <Separator className="my-4" />
            <div className="text-md text-slate-700">
              <p>
                Esta entrevista fue muy enriquecedora para el equipo ya que pudimos ver muchos puntos de vista que no
                habiamos tenido en cuenta, se recomienda la lectura.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 z-10">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Edgardo Rodríguez - Jefe de Infraestructura en una compañía de diálisis.
            </h3>
          </CardHeader>
          <CardContent className="mt-2">
            <div className="text-md text-slate-700">
              <p>
                El entrevistado usa <b>servicios en línea</b> frecuentemente para acceder a soporte técnico, crear
                cuentas para servidores, virtualización, web hosting y DNS. Menciona que está constantemente creando
                cuentas para diferentes servicios.
              </p>

              <p>
                Generalmente <b> no lee Términos y Condiciones</b>, salvo cuando una plataforma le genera desconfianza.
                En esos casos, hace un rápido análisis de los títulos antes de profundizar.
              </p>

              <p>
                Le preocupa la <b>Inseguridad en línea</b>. Esta atento a las vulnerabilidades de las contraseñas, como alertas de Google
                Passwords Vault sobre filtraciones. Pasa mucho tiempo cambiando sus contraseñas regularmente para mantener su seguridad.
              </p>
              <p>
                Con respecto a la <b>Evolución de la Sociedad y la Privacidad:</b> los últimos años, Edgardo percibe que la sociedad está saturada de información, lo que puede derivar
                en desinformación. Las empresas hacen TyC más complejos para protegerse, lo cual hace más difícil
                entender las consecuencias de aceptarlos.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 z-10">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Conlusiones
            </h3>
          </CardHeader>
          <CardContent className="mt-2">
            <div className="text-md text-slate-700">
              <p>
                <p>
                  Según las entrevistas, los términos y condiciones a menudo resultan incómodos para el usuario, ya que
                  su redacción técnica y extensa puede dificultar su comprensión. Se considera fundamental, en el
                  desarrollo de nuestra sociedad, que los comercios establezcan políticas claras y concisas, limitándose
                  a lo esencial y evitando complicaciones innecesarias. Además, es crucial conocer a la empresa detrás
                  de cada plataforma, asegurando que actúe con transparencia y responsabilidad.
                </p>
                <p>
                  Destacamos un tema de gran importancia: el Estado argentino tiene una responsabilidad considerable en
                  estas cuestiones y no está interviniendo como debería. Es necesario que haya una intervención en casos
                  como el de WorldCoin [3], para proteger a la población. Otro punto muy importante son los menores,
                  quienes no son conscientes de los riesgos que pueden asumir al aceptar términos y condiciones.
                </p>
                <p>
                  También es relevante valorar cómo Europa gestiona las cookies, ya que prioriza la privacidad del
                  usuario y promueve una mayor claridad sobre el uso de datos.
                </p>
                <p className="mb-0">
                  Finalmente, es importante recordar que cualquier información que se comparta en línea puede ser
                  difícil de eliminar por completo, lo que implica riesgos que pueden repercutir en la vida real.
                </p>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

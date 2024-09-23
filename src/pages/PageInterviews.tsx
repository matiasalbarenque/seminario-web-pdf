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
                 <br/>
                  <br/>"No son nada cómodas para el usuario"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              gtrfhsrgtf arthraehh
            </h3>
          </CardHeader>
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
      </div>
      {/* <div className="mx-6 my-10 flex flex-col gap-10 flex-1 z-10">
        <div className="flex flex-1 gap-10">
          <div className="p-8 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">55%</span>
              </div>
            </div>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
            </p>
          </div>
          <div className="p-8 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">67%</span>
              </div>
            </div>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-10">
          <div className="p-6 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">10%</span>
              </div>
            </div>
            <p className="mb-0">rgerfg</p>
          </div>
          <div className="p-6 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">10%</span>
              </div>
            </div>
            <p className="mb-0">rgerfg</p>
          </div>
        </div>
      </div> */}
    </Page>
  );
};

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
                <b>¿Quién sos, que estudiaste?</b>

                <p>“Soy Julieta Zanazzi, soy abogada y soy magister en derecho de la ciberseguridad y entorno digital, especializada en cibercrimen. Actualmente estoy trabajando en la dirección de asistencia judicial en delitos complejos y crímenes organizados en la corte suprema de justicia y, específicamente en el área de las telecomunicaciones, entre ellos, redes y comunicaciones electrónicas en general.”
                </p>
                <b>¿Por qué te parece importante que los usuarios le presten atención a los tycs?
                </b>
                <p>
                  “La importancia es que el usuario empiece a entender que hay que proteger nuestros datos y que la info. A este tipo de empresas es plata y se lo estamos dando gratuito, y además que con nuestra info pueden hacer muchísimas cosas, privacidad, suplantación de identidad, cometer algún tipo de delito.”
                  <br/>"No son nada cómodas para el usuario"
                  <br/>"Hay que tener lo mínimo para tu comercio y no más"
                  <br/>"Hay que saber la empresa que está detrás"
                  <br/>"Me gusta como Europa maneja las cookies"
                  <br/>"Todo lo que metemos en internet no se borra"
                  <br/>"Puede tener riesgos en la vida real"
                </p>

                <b>¿Qué notas en la sociedad con respecto a este problema en los últimos 5-10 años?</b>
                <p>“La gente empezó a ser más consciente de que hay que proteger nuestra información.”
                  <br/>“Pero falta un montón todavía igual. Algo es algo.”
                  <br/>“¿Cuánta gente metió el ojito por 50 lucas?”</p>

                <b>¿Decis que el estado está ausente(World Coin)?</b>
                <p>“tiene que haber una materia que hable de esto”
                  “los pibes no tienen conciencia de los riesgos”
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum commodi veniam, quas magni
                nemo reprehenderit quasi, facilis nobis omnis at qui saepe minima eos iusto impedit repellat, corporis
                voluptas.
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

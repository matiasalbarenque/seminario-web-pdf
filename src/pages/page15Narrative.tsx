import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';

export const Page15Narrative = () => {
  return (
    <Page>
      <div className="w-full mb-14 text-center">
        <PageTitle text="Problema" />
      </div>
      <div className="text-center">
        <h3 className="text-5xl font-light font-open-sans leading-tight uppercase">
          La ignorancia contractual como el reflejo de la inexistencia del temor
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-6 w-72 h-[2px] bg-primary-600" />
      </div>
      <p className="pStandard">
        Tomando en cuenta todos los puntos analizados (problemática, entrevistas y encuestas) el usuario que no lee los términos y condiciones <b>nunca</b> [4] los va a leer aunque estén resumidos o no. No importa una solución que facilite este paso ya que al usuario no le atrae en absoluto lo que hay detrás de tildar la casilla al registrarse. Sea por ignorancia, confianza, desinformación, etc. la sociedad ignora este paso y va directo a utilizar la aplicación, desconociendo sus consecuencias.
      </p>
      <p className="pStandard">
        Nunca va a existir un resumen que sea suficientemente atractivo para el usuario, no se pueden resumir los términos y condiciones en una página, y nunca vamos a lograr enseñarles a toda una población a cómo leerlos, pero lo que podemos lograr es ‘‘cambiar y transformar’’ esa ignorancia en preocupación, la confianza en desconfianza y atacar esa desinformación con concientización.
      </p>
      <p className="pStandard">
        Necesitamos que la gente sea consciente de lo que está aceptando, y sea capaz de verlo con sus propios ojos en una manera didáctica e interactiva, estimulando la curiosidad, mostrándole que hacen las empresas detrás de nuestras aplicaciones a nuestras espaldas para mantenernos contentos mientras utilizan nuestros datos para “llenarse los bolsillos”.
      </p>
      <p className="pStandard">
        Pero bueno basta de palabras, yendo al grano técnicamente lo que proponemos es una APP <b>ANT&CDOTE</b> //‘antídoto’ de ‘t&c’: términos y condiciones// que consume la información del usuario para poder generar un perfil que demuestre el grado de exposición de cada uno.
      </p>
      <p className="pStandard">
        La información que utilizará es la que exponemos a diario, en todas las aplicaciones que usamos. Para ello va a necesitar acceder a nuestro teléfono o navegador con la mayor cantidad de permisos posibles, dependiendo del usuario.
      </p>
      <p className="pStandard">
        Con esta información va a brindarnos a través de un análisis un retrato de nuestra identidad digital, recalcando el grado de exposición en la que cada uno se encuentra. Por ejemplo, los grados serían A(nada expuesto),B,C,D,E (Muy expuesto), y si usas algún servicio de Meta, lo mas probable que tu perfil salga de color rojo con la letra ‘E’.
      </p>
    </Page>
  );
};

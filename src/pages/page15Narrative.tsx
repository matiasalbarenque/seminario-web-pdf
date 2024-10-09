import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import exposureMeter from '@/assets/img/narrative/exposure-meter.svg';

export const Page15Narrative = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Narrativa" />
      </div>
      <div className="text-center">
        <h3 className="text-5xl font-light font-open-sans leading-tight uppercase">
          El temor como antídoto a la ignorancia contractual
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-6 w-72 h-[2px] bg-primary-600" />
      </div>
      <p className="pStandard">
        Tomando en cuenta todos los puntos analizados (problemática, entrevistas y encuestas) el usuario que no lee los
        términos y condiciones <b>nunca</b> [4] los va a leer aunque estén resumidos. Una solución que
        facilite este paso pierde impacto ya que al usuario promedio no le atrae en absoluto lo que hay detrás de tildar la casilla al
        registrarse. Sea por <i>ignorancia, confianza, desinformación</i>, etc. la sociedad ignora este paso y va
        directo a utilizar la aplicación, desconociendo sus consecuencias.
      </p>
      <p className="pStandard">
        Un resumen que sea suficientemente atractivo para el usuario es atacar una pequeña porción del problema, no se pueden resumir los
        términos y condiciones en una página o enseñarles a toda una población a cómo leerlos.
        Si bien es una tarea dificil, el objetivo de la solución será ‘‘cambiar y transformar’’ esa <i>ignorancia</i>  en <i>preocupación</i> , la
        <i> confianza</i> en <i>desconfianza</i> y atacar esa <i>desinformación</i>  con <i>concientización</i> .
      </p>
      <p className="pStandard">
        Es necesario que los usuarios sean conscientes de lo que están aceptando, y sean capaces de verlo con sus propios ojos en
        una manera didáctica e interactiva, estimulando la curiosidad, mostrándole que hacen las empresas detrás de
        sus aplicaciones a nuestras espaldas para mantenerlos felices mientras utilizan sus datos para
        “llenarse los bolsillos”.
      </p>
      <p className="pStandard">
        Técnicamente la propuesta es una APP <b>ANT&CDOTE</b>{' '}
        //‘antídoto’ de ‘t&c’: términos y condiciones// que consume la información del usuario para poder generar un
        perfil que demuestre el grado de exposición de cada uno.
      </p>
      <p className="pStandard">
        La información que utilizará es la que exponen a diario, en todas las aplicaciones que usan. Para ello va a
        necesitar acceder a su teléfono o navegador con la mayor cantidad de permisos posibles, dependiendo del
        usuario.
      </p>
      <p className="pStandard">
        Con esta información se brindará a través de un análisis un retrato de su identidad digital, recalcando
        el grado de exposición en la que cada uno se encuentra. Por ejemplo, los grados serían{' '}
        <span className="cA">A</span>,<span className="cB">B</span>,<span className="cC">C</span>,
        <span className="cD">D</span>,<span className="cE">E</span>, y por ejemplo si tiene algún servicio de Meta, lo mas probable
        que su perfil salga con la letra ‘<span className="cE">E</span>’.
      </p>

      <img src={exposureMeter} className="mt-10 h-28 z-10" />
    </Page>
  );
};

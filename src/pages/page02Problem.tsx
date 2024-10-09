import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Stain1 } from '@/components/PageBackground';

export const Page02Problem = () => {
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
        Los términos y condiciones, o condiciones de uso y contratación, políticas de privacidad y otros documentos son
        elaborados por el proveedor del servicio y en ellos se regula la relación del usuario con respecto a los
        servicios que se ofrecen y los datos personales que se manejan.
      </p>
      <p className="pStandard">
        Una de las primeras acciones que el proveedor obliga a sus usuarios a hacer cuando adquiere o instala una aplicación y
        siempre antes de usarla, es manifestar su aceptación de los términos y condiciones. Por ejemplo, se
        muestran los términos y en la parte final se incluye un botón para aceptarlos o abandonar, o se muestra una
        casilla de verificación y un enlace que lleva a la página de los documentos.
      </p>
      <p className="pStandard">
        Si bien cada proveedor redacta sus propios términos y condiciones, las legislaciones nacionales de muchos países
        prevén cuáles son los contenidos que un documento de este tipo debe tener. En España, por ejemplo, las
        principales normas a considerar son la la{' '}
        <a href={'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758'}>LSSI</a> que regula las condiciones de
        contratación básicas para productos y servicios digitales y la{' '}
        <a href={'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-16673'}>LOPD</a> que se encarga de regular la
        recolección y gestión de los datos personales con los que opera la app [1]. En Argentina hay muchas páginas
        de negocios básicos que copian y pegan términos y condiciones de otros servicios, sin corroborar o
        analizarlas y eso es grave, ya que deberían estar adecuadas sólo para el comercio que correspondiera [2].
      </p>
      <div className="flex">
        <div>
          <p className="pStandard">
            La <b>importancia</b> de los términos y condiciones <b>no suele apreciarse</b> cuando uno está satisfecho
            con la aplicación que se está utilizando. Sin embargo, <b></b>si surge algún problema derivado [8,9,10]
            del uso de las mismas que pudiera acarrear al usuario a <b>cesión de datos</b> o incluso{' '}
            <b>riesgos para su privacidad</b>, ya no es posible dar vuelta atrás debido a las normas que pudiera
            fijar el contrato.
          </p>
        </div>
        <div className="min-w-96 flex justify-center items-center">
          <Stain1 className="absolute scale-110 opacity-40" />
          <img src="/img/security-concerns/hacking1.png" alt="hacking" className="w-80 mb-6" />
        </div>
      </div>
      <p className="pStandard">
        Conociendo la importancia de los términos y condiciones y la necesidad de leerlos y
        aceptarlos antes de disfrutar de nuestras apps, <b>¿dónde podría estar el problema?</b>
      </p>
    </Page>
  );
};

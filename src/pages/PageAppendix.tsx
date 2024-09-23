import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const PageAppendix = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="Anexo" />
      </div>
      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Trello de Historias de Usuario
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                Listado de Historias de Usuario ordenadas por prioridad para ser cargadas al tablero del User Story
                Mapping.
              </div>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                </div>
                <a
                  href="https://trello.com/b/kDyiFaCv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-primary-700"
                >
                  Trello: Historias de Usuario
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Entrevistas realizadas
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                </div>
                <a
                  href="https://docs.google.com/document/d/1vnMg9OTLl2MD2qgN5Q4KcQlhOwJqbdxbqEG2tgN32LM/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-primary-700"
                >
                  Entrevista Julieta Zanazzi
                </a>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                </div>
                <a
                  href="https://docs.google.com/document/d/1AH6BBMWl_nNNm0tgtwnRY5OeqD0Sly8cuPOcULGJIAk/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-primary-700"
                >
                  Entrevista Edgardo Rodríguez
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Agencia Española de protección de datos
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                En la siguiente nota se hace hincapié en la importancia y focos que hacen los Términos y Condiciones en
                las aplicaciones, como éstos cada vez requieren adjuntar más y más detalles obligados por los gobiernos
                y cómo la sociedad los pasa por alto obviando mucha información importante.
              </div>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                </div>
                <a
                  href="https://www.aepd.es/prensa-y-comunicacion/blog/el-examen-de-aplicaciones-iii-los-terminos-y-condiciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-primary-700"
                >
                  El examen de aplicaciones (III): los términos y condiciones
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Otras notas
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>

                  <a
                    href="https://www.argentina.gob.ar/noticias/avanza-la-investigacion-de-la-aaip-sobre-worldcoin-y-el-uso-de-datos-personales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-primary-700"
                  >
                    Avanza la investigación de la AAIP sobre WorldCoin y el uso de datos personales
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>

                  <a
                    href="https://tn.com.ar/deportes/futbol/2024/09/12/miles-de-socios-de-san-lorenzo-que-pagan-sus-cuotas-por-debito-automatico-denunciaron-robos-en-sus-cuentas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-primary-700"
                  >
                    Miles de socios de San Lorenzo que pagan sus cuotas por débito automático denunciaron robos en sus
                    cuentas
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>

                  <a
                    href="https://elchapuzasinformatico.com/2019/09/francia-los-usuarios-de-steam-tienen-derecho-a-revender-sus-juegos-digitales/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-primary-700"
                  >
                    Francia: «Los usuarios de Steam tienen derecho a revender sus juegos digitales»
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>

                  <a
                    href="https://www.20minutos.es/noticia/1577313/0/bruce-willis/hijas-hereden/itunes/#xtor=AD-15&amp;xts=467263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-primary-700"
                  >
                    Bruce Willis irá a los tribunales para que sus hijas puedan heredar sus canciones de iTunes
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

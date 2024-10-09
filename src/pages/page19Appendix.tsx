import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const Page19Appendix = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="Anexo" />
      </div>

      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Fuentes
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
                    href="https://www.aepd.es/prensa-y-comunicacion/blog/el-examen-de-aplicaciones-iii-los-terminos-y-condiciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [1] AEPD - Términos y condiciones - El examen de aplicaciones (III)
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://docs.google.com/document/u/0/d/1vnMg9OTLl2MD2qgN5Q4KcQlhOwJqbdxbqEG2tgN32LM/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [2] Entrevista Julieta Zanazzi - Abogada Mg. Derecho de la Ciberseguridad y Entorno Digital
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.argentina.gob.ar/noticias/avanza-la-investigacion-de-la-aaip-sobre-worldcoin-y-el-uso-de-datos-personales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [3] Avanza la investigación de la AAIP sobre WorldCoin y el uso de datos personales
                  </a>
                </div>

                <div className="flex gap-2">[4] Encuestas</div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.iniseg.es/blog/ciberseguridad/terminos-y-condiciones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [5] INISEG - Términos y Condiciones ¿Aceptas los términos y condiciones sin leerlos?
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.bleepingcomputer.com/news/security/533-million-facebook-users-phone-numbers-leaked-on-hacker-forum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [6] Bleeping computer - 533 millones de usuarios de Facebook hackeados.
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://lorrie.cranor.org/pubs/readingPolicyCost-authorDraft.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [7] The Cost of Reading Privacy Policies by Aleecia M. McDonald and Lorrie Faith Cranor (pág. 17)
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.diariocritico.com/internacional/muere-parque-disney-niegan-indemnizacion-marido-suscripcion-disney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [8] Muere en un parque de Disney y niegan la indemnización a su marido por la suscripción a Disney+
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
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [9] Miles de socios de San Lorenzo que pagan sus cuotas por débito automático denunciaron robos en
                    sus cuentas
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.20minutos.es/noticia/1577313/0/bruce-willis/hijas-hereden/itunes/#xtor=AD-15&xts=467263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [10] Bruce Willis irá a los tribunales para que sus hijas puedan heredar sus canciones de iTunes
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://edition.cnn.com/2024/10/02/business/uber-eats-accident-lawsuit/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [11] CNN - UBER EATS ACCIDENT LAWSUIT
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                    href="https://www.infobae.com/tecno/2024/10/04/accidente-en-uber-resulto-todo-un-caos-para-una-familia-esto-es-lo-que-no-sabes-de-los-viajes-por-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [11] INFOBAE - Accidente Uber
                  </a>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                  </div>
                  <a
                      href="https://news.un.org/es/story/2023/12/1526712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-medium text-gray-800 hover:text-primary-700"
                  >
                    [12] UN - Más del 75% de la población mundial tiene un teléfono celular y más del 65% usa el internet
                  </a>
                </div>
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
                  className="text-md font-medium text-gray-800 hover:text-primary-700"
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
                  className="text-md font-medium text-gray-800 hover:text-primary-700"
                >
                  Entrevista Edgardo Rodríguez
                </a>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img src="/img/icons/external-link.svg" alt="external-link" className="w-4 h-4" />
                </div>
                <a
                  href="https://www.canva.com/design/DAGRf6FrrGE/eKzU4roCgKuBuohSSd4Mng/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-gray-800 hover:text-primary-700"
                >
                  Resumen: Entrevista Edgardo Rodríguez
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

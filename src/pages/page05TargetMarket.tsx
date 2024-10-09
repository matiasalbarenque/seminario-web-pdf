import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import massMarket1 from '@/assets/img/target-market/mass-market/mass-market-1.svg';
import nicheMarket1 from '@/assets/img/target-market/niche-market/niche-market-1.svg';
import segmentedMarket1 from '@/assets/img/target-market/segmented-market/segmented-market-1.svg';
import segmentedMarket2 from '@/assets/img/target-market/segmented-market/segmented-market-2.svg';
import diversifiedMarket1 from '@/assets/img/target-market/diversified-market/diversified-market-1.svg';
import multilateralMarket1 from '@/assets/img/target-market/multilateral-market/multilateral-market-1.svg';
import conclusion1 from '@/assets/img/target-market/conclusion-1.svg';

const MassMarket = () => (
  <div className="flex items-center gap-6">
    <div className="p-8 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={massMarket1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Mercado en masa
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Aplicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Nos afecta a todos los usuarios de la misma manera.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const NicheMarket = () => (
  <div className="flex flex-row-reverse items-center gap-6">
    <div className="p-8 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={nicheMarket1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Mercado de nicho
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Aplicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Se podrá apuntar a usuarios preocupados por la privacidad y
            dispuestos a adoptar herramientas o conocimiento de profesionales especializados.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const SegmentedMarket = () => (
  <div className="flex items-center gap-6">
    <div className="p-8 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <div className="w-full h-full">
        <img src={segmentedMarket1} className="absolute w-20 left-0 top-0" />
        <img src={segmentedMarket2} className="absolute w-16 right-0 bottom-0" />
      </div>
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Mercado segmentado
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Aplicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Se dirigirá a varios segmentos que comparten preocupaciones similares sobre la privacidad pero con
            ligeras diferencias en cómo gestionan su información.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const DiversifiedMarket = () => (
  <div className="flex flex-row-reverse items-center gap-6">
    <div className="p-12 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={diversifiedMarket1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Mercado diversificado
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Aplicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            La oferta abarca a todos los aspectos en gestión de identidad digital, puntualmente en simplificar la complejidad de los términos y condiciones con el objetivo de concientizar y educar.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const MultilateralMarket = () => (
  <div className="flex items-center gap-6">
    <div className="p-8 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={multilateralMarket1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Mercado multilateral
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Aplicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Las bases de datos recopiladas con información del servicio podran brindarse como un servicio en sí (a los Ministerios de Educación y Legislación por ejemplo).
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Conclusion = () => (
  <div className="flex flex-row-reverse items-center gap-6">
    <div className="p-8 w-40 h-40 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={conclusion1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight">Conclusión</h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div className="text-sm font-open-sans text-gray-500">
            Ya que apunta a todas las personas que usan un teléfono, el mercado target más adecuado sería un mercado en masa diversificado.
            Tambien incluye mercados de nicho y segmentados, como usuarios preocupados por la privacidad digital, especialmente aquellos que valoran la seguridad y simplicidad en la gestión de su
            información personal en línea. En cuanto a la segmentación psicográfica y de comportamiento serán claves para identificar a estos usuarios.
          </div>
          <div className="text-sm font-open-sans text-gray-500">
            Con esta segmentación y definición de mercado target, nos enfocaremos mejor en las estrategias de marketing y desarrollo de producto que cumpla con las expectativas de los usuarios tratados.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const Page05TargetMarket = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Mercado Target" />
      </div>
      <div className="flex flex-col gap-6">
        <MassMarket />
        <NicheMarket />
        <SegmentedMarket />
        <DiversifiedMarket />
        <MultilateralMarket />
        <Conclusion />
      </div>
    </Page>
  );
};

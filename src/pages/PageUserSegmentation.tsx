import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import demographic1 from '@/assets/img/user-segmentation/demographic/demographic-1.svg';
import psychographic1 from '@/assets/img/user-segmentation/psychographic/psychographic-1.svg';
import behavior1 from '@/assets/img/user-segmentation/behavior/behavior-1.svg';
import geographic1 from '@/assets/img/user-segmentation/geographic/geographic-1.svg';

const Demographic = () => (
  <div className="flex items-center gap-6">
    <div className="p-10 w-60 h-60 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={demographic1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Demográfica
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Edad</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Adultos jóvenes y personas de mediana edad (25-45 años), que son los que suelen estar más activos en la
            creación de cuentas en diferentes sitios web.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Ocupación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Profesionales de oficina, estudiantes universitarios, trabajadores remotos.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Nivel de ingresos</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Medio a alto, con acceso frecuente a servicios en línea que requieren la creación de cuentas.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Psychographic = () => (
  <div className="flex flex-row-reverse items-center gap-6">
    <div className="p-14 w-60 h-60 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={psychographic1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Psicográfica
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Estilo de vida</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Personas conscientes de la privacidad digital y preocupadas por el manejo de su información personal en
            línea.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Intereses</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Tecnología, ciberseguridad, herramientas de gestión digital.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Valores</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Alto valor por la seguridad y privacidad personal, buscan soluciones prácticas que les ahorren tiempo y les
            protejan del spam y estafas.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Behavior = () => (
  <div className="flex items-center gap-6">
    <div className="p-12 w-60 h-60 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={behavior1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Comportamiento
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Frecuencia de uso</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Usuarios frecuentes de servicios en línea que requieren registro, como redes sociales, comercio electrónico,
            y plataformas de streaming.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Lealtad</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Personas que ya utilizan algún tipo de herramienta para proteger su información en línea y están abiertas a
            nuevas soluciones más efectivas.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Uso de tecnología</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Usuarios que utilizan múltiples dispositivos y prefieren herramientas que les ofrezcan simplicidad y
            seguridad en la gestión de cuentas.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Geographic = () => (
  <div className="flex flex-row-reverse items-center gap-6">
    <div className="p-12 w-60 h-60 flex justify-center items-center bg-white rounded-full shadow">
      <div className="absolute w-full h-full rounded-full border-l-2 border-primary-400 animate-spin5s" />
      <img src={geographic1} />
    </div>
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
          Geográfica
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <h4 className="text-sm font-semibold">Ubicación</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Principalmente en áreas urbanas y suburbanas donde el acceso a internet es más robusto y la adopción de
            tecnología es alta.
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Países</h4>
          <div className="text-sm font-open-sans text-gray-500">
            Principalmente en países desarrollados o en vías de desarrollo con alta penetración de internet y uso de
            servicios en línea.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const PageUserSegmentation = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Segmentación de Usuarios" />
      </div>
      <div className="flex flex-col gap-10">
        <Demographic />
        <Psychographic />
        <Behavior />
        <Geographic />
      </div>
    </Page>
  );
};

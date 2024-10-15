import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import type { ChartConfig } from '@/components/ui/chart';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Pie,
  PieChart,
  YAxis,
  RadarChart,
  PolarAngleAxis,
  PolarGrid, Radar,
} from 'recharts';

const CardChartSurvey1 = () => {
  const description = "A radar chart"

  const chartData = [
    { month: "Identificación por cámara", desktop: 202 },
    { month: "Teléfono", desktop: 121 },
    { month: "Otros", desktop: 31 },
    { month: "Nombre completo", desktop: 80 },
    { month: "Huella dactilar", desktop: 194 },
    { month: "Correo", desktop: 44 },
    { month: "Foto del DNI", desktop: 236 },
  ]

  const chartConfig = {
    desktop: {
      label: "total",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>¿Con cuál de los siguientes datos abandonarías el proceso de registro en una aplicación?</CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="max-h-[300px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
        Foto del DNI 236 (73.3%),
          Identificación por cámara 202 (62.7%),
          Huella dactilar 194 (60.2%),
          Teléfono 121 (37.6%),
          Nombre completo 80 (24.8%),
          Correo 44 (13.7%),
          Otros 31 (9.6%)
        </div>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey2 = () => {
  const description = "A radar chart"

  const chartData = [
    { month: "Privacidad y datos", desktop: 175 },
    { month: "Cookies y seguimiento", desktop: 106 },
    { month: "Derechos y responsabilidades", desktop: 99 },
    { month: "Uso y restricciones", desktop: 80 },
    { month: "Conforme", desktop: 69 },
    { month: "NS/NC", desktop: 38 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>¿Qué información te gustaría que estuviera más clara en los términos y condiciones de los sitios web?</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[300px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Política de privacidad y manejo de datos personales 175 (54.3%),
          Uso de cookies y tecnologías de seguimiento 106 (32.9%),
          Derechos y responsabilidades del usuario 99 (30.7%),
          Condiciones de uso y restricciones 80 (24.8%),
          Estoy conforme 69 (21.4%),
          NS/NC 38 (11.8%)
        </div>
      </CardFooter>
    </Card>
  );
};

export const Page07Surveys = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <CardChartSurvey1 />
          <CardChartSurvey2 />
        </div>
      </div>
      <div className="w-full flex justify-center mt-1">
        <div className="my-6 w-72 h-[2px] bg-primary-600" />
      </div>
      <div className="mb-8 p-5 bg-white rounded-2xl shadow">
        <div className="w-full mb-4 text-center">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Resultados arrojados por la encuesta
            </h3>
          </CardHeader>
        </div>
        <p className="pStandard">
          El resultado fue positivo y demostró que hay una preocupación reflejada en la población.
        </p>
        <p className="pStandard">
          Un resultado sorprendente fue lo parejo que resultó ser la precupación por la privacidad respecto a la edad.
          Se esperaba que los jóvenes entre 25 y 35 sean mas concientes de los riesgos que toman ya que están mas
          actualizados con las
          noticias relacionadas con este tema pero al parecer es lo contrario y la edad es un factor importante para
          evaluar la conciencia sobre las consecuencias de los contratos.
        </p>
        <p className="pStandard">
          Algo importante para destacar es que si bien mas del <b>70%</b> reflejó una preocupación importante por su
          privacidad en linea, solo el <b>3.7%</b> se toma el tiempo de leer los Términos y Condiciones. Esto es
          una{' '}
          <b>gran contradicción </b>
          ya que uno tiene que leer que responsabilidad esta asumiendo, que información esta compartiendo y cuales son
          los riesgos y/o consecuencias.
        </p>
        <p className="pStandard">Otro dato para destacar fueron los{' '}
          <b>175</b> (54.3%) encuestados que demostrarón un interés en que esté más clara la política de privacidad y
          manejos de datos personales.</p>
        <p className="pStandard">
          Una peculiaridad es que un <b>12.4%</b> acepta por el hecho de confiar en la empresa que se esta
          registrando. Es una decisión muy cuestionable como se vió en el desarollo del problema lo que pasó con Disney
          [8] y Uber [11].
        </p>
        <p className="pStandard">
          En retrospectiva, nos hubiera gustado conocer mas datos como género por ejemplo para poder segmentar mejor
          nuestros usuarios y analizar si hay una correlación con la privacidad en linea.
        </p>
      </div>
    </Page>
  );
};

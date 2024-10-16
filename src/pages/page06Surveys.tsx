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
import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart, YAxis } from 'recharts';

const CardChartSurvey1 = () => {
  const chartConfig = {
    age: {
      label: 'Puntaje',
      color: '#FFD535',
    },
  } satisfies ChartConfig;

  const chartData = [
    { range: '< 25', age: 6.75, votos: 72 },
    { range: '25 a 35', age: 7.164, votos: 146 },
    { range: '36 a 45', age: 7.268, votos: 41 },
    { range: '> 45', age: 7.265, votos: 49 },
  ];
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Rango etario</CardTitle>
        <CardDescription>Preocupación por la privacidad de la información personal</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis type="number" domain={[0, 10]} />
            <XAxis dataKey="range" tickLine={false} tickMargin={10} axisLine={false} domain={[0, 10]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="age" fill="var(--color-age)" radius={4} label={{ position: 'top' }} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-slate-700 text-center">
        Toda la población presenta un promedio de preocupación por su privacidad de aproximadamente 7, en una escala del
        1 al 10.{' '}
      </CardFooter>
    </Card>
  );
};

const GenericPieChart = ({
  config,
  chartData,
}: {
  config: ChartConfig;
  chartData: { respuesta: string; porcentaje: number; fill: string }[];
}) => {
  return (
    <ChartContainer config={config} className="mx-auto aspect-square max-h-[275px]">
      <PieChart>
        <Pie data={chartData} dataKey="porcentaje" label nameKey="respuesta" />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="respuesta" />} />
        <ChartLegend
          content={<ChartLegendContent nameKey="respuesta" />}
          className="flex-wrap gap-1 [&>*]:basis-1/4 [&>*]:justify-center flex-col py-2"
        />
      </PieChart>
    </ChartContainer>
  );
};

const CardChartSurvey4 = () => {
  const chartData = [
    { respuesta: 'si', porcentaje: 69.8, fill: 'var(--color-si)' },
    { respuesta: 'no', porcentaje: 30.2, fill: 'var(--color-no' },
  ];

  const chartConfig = {
    si: {
      label: 'Si',
      color: 'hsl(var(--chart-1))',
    },
    no: {
      label: 'No',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Fuga de datos</CardTitle>
        <CardDescription>Confirmaciones</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 scale-95">
        <GenericPieChart chartData={chartData} config={chartConfig} />
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs text-center">
        El ~70% de la población que verificó con una herramienta pudo confirmar que sus datos habían sido vulnerados
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey5 = () => {
  const chartData = [
    { respuesta: 'nunca', porcentaje: 55.4, fill: 'var(--color-nunca)' },
    { respuesta: 'aVeces', porcentaje: 40.7, fill: 'var(--color-aVeces)' },
    { respuesta: 'siempre', porcentaje: 3.9, fill: 'var(--color-siempre)' },
  ];

  const chartConfig = {
    nunca: {
      label: 'Nunca',
      color: 'hsl(var(--chart-1))',
    },
    aVeces: {
      label: 'A veces',
      color: 'hsl(var(--chart-2))',
    },
    siempre: {
      label: 'Siempre',
      color: 'hsl(var(--chart-3))',
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>Frecuencia de lectura</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <GenericPieChart chartData={chartData} config={chartConfig} />
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs text-center">
        <div>Más de la mitad de la población nunca lee los Términos y Condiciones</div>
        <div>Solo un ~4% de la población los lee siempre.</div>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey6 = () => {
  const chartData = [
    { respuesta: 'demasiadoLargo', porcentaje: 78.2, fill: 'var(--color-demasiadoLargo)' },
    { respuesta: 'confioEnLaEmpresa', porcentaje: 12.4, fill: 'var(--color-confioEnLaEmpresa)' },
    { respuesta: 'dificilDeComprender', porcentaje: 6.5, fill: 'var(--color-dificilDeComprender)' },
    { respuesta: 'otros', porcentaje: 2.9, fill: 'var(--color-otros)' },
  ];

  const chartConfig = {
    demasiadoLargo: {
      label: 'Son demasiado largos',
      color: 'hsl(var(--chart-1))',
    },
    confioEnLaEmpresa: {
      label: 'Confío en la empresa, no me importa',
      color: 'hsl(var(--chart-2))',
    },
    dificilDeComprender: {
      label: 'Te resulta difícil de comprender',
      color: 'hsl(var(--chart-3))',
    },
    otros: {
      label: 'Otros',
      color: 'hsl(var(--chart-5))',
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>¿Por qué no se leen?</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <GenericPieChart chartData={chartData} config={chartConfig} />
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs text-center">
        <div>De los 55,4% que nunca lee los T&C,</div>
        <div>el 78.2% indicó que son demasiado largos.</div>
        <div>Un 12.4% confía ciegamente en la empresa.</div>
      </CardFooter>
    </Card>
  );
};

export const Page06Surveys = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Encuestas" />
      </div>
      <div className="mb-8 p-5 bg-white rounded-2xl shadow">
        <p className="pStandard">
          En la población encuestada predominan las personas de entre <b>25 y 35 años</b> con un 49.4%, seguido de
          menores de 25 años con un 22.7%. El rubro que destaco con diferencia, representando a mas de la mitad de los
          encuestados, fue <b> Tecnología y Computación</b>. En cuanto a servicios en línea más utilizados, las{' '}
          <b>Redes sociales</b> lideraron con un 83.2%, seguidas por el correo electrónico con un 46%. Finalmente, el
          72% de los encuestados son <b>Trabajadores activos</b>, seguido de un 20.8% de estudiantes.
        </p>
        <p>A continuacion se muestran mas datos sobre la encuesta realizada, seguida de una conclusión.</p>
      </div>
      <div className="flex flex-col gap-8 z-10">
        <div className="flex gap-8">
          <CardChartSurvey1 />
          <CardChartSurvey4 />
        </div>
        <div className="flex gap-8 z-10">
          <CardChartSurvey5 />
          <CardChartSurvey6 />
        </div>
      </div>
    </Page>
  );
};

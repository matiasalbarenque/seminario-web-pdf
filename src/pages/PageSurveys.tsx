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
import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart } from 'recharts';

const CardChartSurvey1 = () => {
  const chartConfig = {
    age: {
      label: 'Valor',
      color: '#FFD535',
    },
  } satisfies ChartConfig;

  const chartData = [
    { range: '< 25', age: 67.5, votos: 72 },
    { range: '25 a 35', age: 71.64, votos: 146 },
    { range: '36 a 45', age: 72.68, votos: 41 },
    { range: '> 45', age: 72.65, votos: 49 },
    { range: '100%', age: 100, votos: 307 },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rango etario</CardTitle>
        <CardDescription>Preocupación por la seguridad en línea</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="range" tickLine={false} tickMargin={10} axisLine={false} />
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
      <CardContent className="flex-1 pb-0">
        <GenericPieChart chartData={chartData} config={chartConfig} />
      </CardContent>
      <CardFooter className="flex-col gap-1 text-xs text-center">
        <div>~70% de la población* confirmaron que sus datos habían sido vulnerados</div>
        <div className="leading-none text-muted-foreground">*Que sospechaban una posible fuga de datos.</div>
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
        <div className="leading-none text-muted-foreground">Solo un ~4% de la población los lee siempre.</div>
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
        <div>~78% de la población* no los lee porque son demasiado largos.</div>
        <div className="leading-none text-muted-foreground">*que nunca lee los Téminos y Condiciones.</div>
      </CardFooter>
    </Card>
  );
};

export const PageSurveys = () => {
  return (
    <Page>
      <div className="w-full mb-8 text-center">
        <PageTitle text="Encuestas" />
      </div>
      <div className="mb-8 p-5 bg-white rounded-2xl shadow text-sm text-slate-700 leading-relaxed">
        El resultado de la encuesta fue positivo y demostró que nuestro problema se ve reflejado en la población. Algo
        importante para destacar es que si bien mas del 70% reflejó una preocupación importante por su privacidad en
        linea, solo el 4% se toma el tiempo de leer los Términos y Condiciones. Esto es una gran contradicción ya que
        uno tiene que leer que responsabilidad esta asumiendo, que información esta compartiendo y cuales son los
        riesgos y/o consecuencias.
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <CardChartSurvey1 />
          <CardChartSurvey4 />
        </div>
        <div className="flex gap-8">
          <CardChartSurvey5 />
          <CardChartSurvey6 />
        </div>
      </div>
    </Page>
  );
};

import { useState } from 'react';
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
import { Bar, BarChart, Area, AreaChart, CartesianGrid, XAxis, Pie, PieChart } from 'recharts';

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
      <CardFooter>
        <p>
          Toda la población presenta un promedio de preocupación por su privacidad de aproximadamente 7, en una escala
          del 1 al 10.{' '}
        </p>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey2 = () => {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#FFD535',
    },
    mobile: {
      label: 'Mobile',
      color: '#06b5d0',
    },
  } satisfies ChartConfig;

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey4 = () => {
  const chartData = [
    { browser: 'chrome', vulnerados: 69.8, fill: 'var(--color-chrome)' },
    { browser: 'safari', vulnerados: 30.2, fill: 'var(--color-safari)' },
  ];

  const chartConfig = {
    vulnerados: {
      label: 'vulnerados',
    },
    chrome: {
      label: 'Si',
      color: 'hsl(var(--chart-1))',
    },
    safari: {
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
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="vulnerados" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          ~70% de la población* confirmaron que sus datos habían sido vulnerados
        </div>
        <div className="leading-none text-muted-foreground">*Que sospechaban una posible fuga de datos.</div>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey5 = () => {
  const chartData = [
    { browser: 'chrome', vulnerados: 55.4, fill: 'var(--color-chrome)' },
    { browser: 'safari', vulnerados: 40.7, fill: 'var(--color-safari)' },
    { browser: 'edge', vulnerados: 3.9, fill: 'var(--color-edge)' },
  ];

  const chartConfig = {
    vulnerados: {
      label: 'vulnerados',
    },
    chrome: {
      label: 'Nunca',
      color: 'hsl(var(--chart-1))',
    },
    safari: {
      label: 'A veces',
      color: 'hsl(var(--chart-2))',
    },
    edge: {
      label: 'Siempre',
      color: 'hsl(var(--chart-3))',
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Frecuencia de lectura</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="vulnerados" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Más de la mitad de la población nunca lee los Términos y Condiciones
        </div>
        <div className="leading-none text-muted-foreground">Solo un ~4% de la población los lee siempre.</div>
      </CardFooter>
    </Card>
  );
};

const CardChartSurvey6 = () => {
  const chartData = [
    { respuesta: 'Son demasiado largos', porcentaje: 78.2, fill: 'var(--color-chrome)' },
    { respuesta: 'Confío en la empresa, no me importa', porcentaje: 12.4, fill: 'var(--color-safari)' },
    { respuesta: 'Te resulta difícil de comprender', porcentaje: 6.5, fill: 'var(--color-edge)' },
    { respuesta: 'Otros', porcentaje: 2.9, fill: 'var(--color-otros)' },
  ];

  const chartConfig = {
    chrome: {
      label: 'Si',
      color: 'hsl(var(--chart-1))',
    },
    safari: {
      label: 'No',
      color: 'hsl(var(--chart-2))',
    },
    edge: {
      label: 'No',
      color: 'hsl(var(--chart-3))',
    },
    otros: {
      label: 'No',
      color: 'hsl(var(--chart-6))',
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>¿Por qué no se leen?</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="porcentaje" nameKey="respuesta" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          ~78% de la población* no los lee porque son demasiado largos.
        </div>
        <div className="leading-none text-muted-foreground">*que nunca lee los Téminos y Condiciones.</div>
      </CardFooter>
    </Card>
  );
};

export const PageSurveys = () => {
  return (
    <Page>
      <div className="w-full mb-6 text-center">
        <PageTitle text="Encuestas" />
        <div className="p-4 bg-white rounded-2xl shadow text-gray-600">
          El resultado de la encuesta fue positivo y demostró que nuestro problema se ve reflejado en la población. Algo
          importante para destacar es que si bien mas del 70% reflejó una preocupación importante por su privacidad en
          linea, solo el 4% se toma el tiempo de leer los Términos y Condiciones. Esto es una gran contradicción ya que
          uno tiene que leer que responsabilidad esta asumiendo, que información esta compartiendo y cuales son los
          riesgos y/o consecuencias.
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <CardChartSurvey1 />
          <CardChartSurvey4 />
        </div>
        <div className="flex gap-6">
          <CardChartSurvey5 />
          <CardChartSurvey6 />
        </div>
      </div>
    </Page>
  );
};

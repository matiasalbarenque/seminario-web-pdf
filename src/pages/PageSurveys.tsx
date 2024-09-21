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
import { Bar, BarChart, Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const CardChartSurvey1 = () => {
  const chartConfig = {
    age: {
      label: 'Valor',
      color: '#FFD535',
    },
  } satisfies ChartConfig;

  const chartData = [
    { range: '< 25', age: 67.5, votos: 72},
    { range: '25 a 35', age: 71.64, votos: 146 },
    { range: '36 a 45', age: 72.68, votos: 41 },
    { range: '> 45', age: 72.65, votos: 49 },
    { range: '100%', age: 100, votos: 307 }
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
            <Bar dataKey="age" fill="var(--color-age)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p>Toda la población presenta una preocupación de aproximadamente 7 en una escala del 1 al 10. </p>
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

const CardChartSurvey3 = () => {
  const [timeRange] = useState('90d');

  const chartData = [
    { date: '2024-04-01', desktop: 222, mobile: 150 },
    { date: '2024-04-02', desktop: 97, mobile: 180 },
    { date: '2024-04-03', desktop: 167, mobile: 120 },
    { date: '2024-04-04', desktop: 242, mobile: 260 },
    { date: '2024-04-05', desktop: 373, mobile: 290 },
    { date: '2024-04-06', desktop: 301, mobile: 340 },
    { date: '2024-04-07', desktop: 245, mobile: 180 },
    { date: '2024-04-08', desktop: 409, mobile: 320 },
    { date: '2024-04-09', desktop: 59, mobile: 110 },
    { date: '2024-04-10', desktop: 261, mobile: 190 },
    { date: '2024-04-11', desktop: 327, mobile: 350 },
    { date: '2024-04-12', desktop: 292, mobile: 210 },
    { date: '2024-04-13', desktop: 342, mobile: 380 },
    { date: '2024-04-14', desktop: 137, mobile: 220 },
    { date: '2024-04-15', desktop: 120, mobile: 170 },
    { date: '2024-04-16', desktop: 138, mobile: 190 },
    { date: '2024-04-17', desktop: 446, mobile: 360 },
    { date: '2024-04-18', desktop: 364, mobile: 410 },
    { date: '2024-04-19', desktop: 243, mobile: 180 },
    { date: '2024-04-20', desktop: 89, mobile: 150 },
    { date: '2024-04-21', desktop: 137, mobile: 200 },
    { date: '2024-04-22', desktop: 224, mobile: 170 },
    { date: '2024-04-23', desktop: 138, mobile: 230 },
    { date: '2024-04-24', desktop: 387, mobile: 290 },
    { date: '2024-04-25', desktop: 215, mobile: 250 },
    { date: '2024-04-26', desktop: 75, mobile: 130 },
    { date: '2024-04-27', desktop: 383, mobile: 420 },
    { date: '2024-04-28', desktop: 122, mobile: 180 },
    { date: '2024-04-29', desktop: 315, mobile: 240 },
    { date: '2024-04-30', desktop: 454, mobile: 380 },
    { date: '2024-05-01', desktop: 165, mobile: 220 },
    { date: '2024-05-02', desktop: 293, mobile: 310 },
    { date: '2024-05-03', desktop: 247, mobile: 190 },
    { date: '2024-05-04', desktop: 385, mobile: 420 },
    { date: '2024-05-05', desktop: 481, mobile: 390 },
    { date: '2024-05-06', desktop: 498, mobile: 520 },
    { date: '2024-05-07', desktop: 388, mobile: 300 },
    { date: '2024-05-08', desktop: 149, mobile: 210 },
    { date: '2024-05-09', desktop: 227, mobile: 180 },
    { date: '2024-05-10', desktop: 293, mobile: 330 },
    { date: '2024-05-11', desktop: 335, mobile: 270 },
    { date: '2024-05-12', desktop: 197, mobile: 240 },
    { date: '2024-05-13', desktop: 197, mobile: 160 },
    { date: '2024-05-14', desktop: 448, mobile: 490 },
    { date: '2024-05-15', desktop: 473, mobile: 380 },
    { date: '2024-05-16', desktop: 338, mobile: 400 },
    { date: '2024-05-17', desktop: 499, mobile: 420 },
    { date: '2024-05-18', desktop: 315, mobile: 350 },
    { date: '2024-05-19', desktop: 235, mobile: 180 },
    { date: '2024-05-20', desktop: 177, mobile: 230 },
    { date: '2024-05-21', desktop: 82, mobile: 140 },
    { date: '2024-05-22', desktop: 81, mobile: 120 },
    { date: '2024-05-23', desktop: 252, mobile: 290 },
    { date: '2024-05-24', desktop: 294, mobile: 220 },
    { date: '2024-05-25', desktop: 201, mobile: 250 },
    { date: '2024-05-26', desktop: 213, mobile: 170 },
    { date: '2024-05-27', desktop: 420, mobile: 460 },
    { date: '2024-05-28', desktop: 233, mobile: 190 },
    { date: '2024-05-29', desktop: 78, mobile: 130 },
    { date: '2024-05-30', desktop: 340, mobile: 280 },
    { date: '2024-05-31', desktop: 178, mobile: 230 },
    { date: '2024-06-01', desktop: 178, mobile: 200 },
    { date: '2024-06-02', desktop: 470, mobile: 410 },
    { date: '2024-06-03', desktop: 103, mobile: 160 },
    { date: '2024-06-04', desktop: 439, mobile: 380 },
    { date: '2024-06-05', desktop: 88, mobile: 140 },
    { date: '2024-06-06', desktop: 294, mobile: 250 },
    { date: '2024-06-07', desktop: 323, mobile: 370 },
    { date: '2024-06-08', desktop: 385, mobile: 320 },
    { date: '2024-06-09', desktop: 438, mobile: 480 },
    { date: '2024-06-10', desktop: 155, mobile: 200 },
    { date: '2024-06-11', desktop: 92, mobile: 150 },
    { date: '2024-06-12', desktop: 492, mobile: 420 },
    { date: '2024-06-13', desktop: 81, mobile: 130 },
    { date: '2024-06-14', desktop: 426, mobile: 380 },
    { date: '2024-06-15', desktop: 307, mobile: 350 },
    { date: '2024-06-16', desktop: 371, mobile: 310 },
    { date: '2024-06-17', desktop: 475, mobile: 520 },
    { date: '2024-06-18', desktop: 107, mobile: 170 },
    { date: '2024-06-19', desktop: 341, mobile: 290 },
    { date: '2024-06-20', desktop: 408, mobile: 450 },
    { date: '2024-06-21', desktop: 169, mobile: 210 },
    { date: '2024-06-22', desktop: 317, mobile: 270 },
    { date: '2024-06-23', desktop: 480, mobile: 530 },
    { date: '2024-06-24', desktop: 132, mobile: 180 },
    { date: '2024-06-25', desktop: 141, mobile: 190 },
    { date: '2024-06-26', desktop: 434, mobile: 380 },
    { date: '2024-06-27', desktop: 448, mobile: 490 },
    { date: '2024-06-28', desktop: 149, mobile: 200 },
    { date: '2024-06-29', desktop: 103, mobile: 160 },
    { date: '2024-06-30', desktop: 446, mobile: 400 },
  ];

  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
    mobile: {
      label: 'Mobile',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;

  const filteredData = chartData.filter(item => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>An interactive area chart</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={value => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={value => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium. Iure earum ipsum neque
          quia, iste excepturi similique natus atque fugiat quis culpa eos, deserunt alias eaque beatae, dolores ad!
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <CardChartSurvey1 />
          <CardChartSurvey2 />
        </div>
        <CardChartSurvey3 />
      </div>
    </Page>
  );
};

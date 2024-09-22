import { Page } from '@/components/Page';
import uadeLogo from '@/assets/img/uade-logo.svg';

import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

type CardAvatarProps = {
  img: string;
  fullname: string;
  fallback?: string;
  studentId: string;
};

const CardAvatar = (props: CardAvatarProps) => {
  return (
    <div className="flex gap-3">
      <div>
        <Avatar>
          <AvatarImage src={props.img} />
          <AvatarFallback>{props.fallback}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow flex flex-col justify-center items-start">
        <div className="text-sm font-medium">{props.fullname}</div>
        <div className="text-xs">Legajo: {props.studentId}</div>
      </div>
    </div>
  );
};

const CardIntro = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <h3 className="text-lg font-semibold leading-none tracking-tight">Trabajo Integrador Final - 2024 2C</h3>
          <CardDescription>Profesores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="p-4 flex flex-col items-center gap-3 flex-1 border border-primary-400 bg-primary-50 rounded-lg">
              <Avatar>
                <AvatarImage src="/img/avatars/02.png" />
                <AvatarFallback>FI</AvatarFallback>
              </Avatar>
              <div className="text-xs font-medium text-center leading-tight">Falcon, Ignacio</div>
            </div>
            <div className="p-4 flex flex-col items-center gap-3 flex-1 border border-primary-400 bg-primary-50 rounded-lg">
              <Avatar>
                <AvatarImage src="/img/avatars/04.png" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
              <div className="text-xs font-medium text-center leading-tight">Viñuela, Sebastian Jorge</div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="mb-4 text-sm text-muted-foreground">Alumnos</div>
          <div className="flex flex-col gap-4">
            <CardAvatar fullname="Albarenque Matías" img="/img/avatars/04.png" studentId="1137027" />
            <CardAvatar fullname="Chobadindegui Eduardo" img="/img/avatars/02.png" studentId="1133498" />
            <CardAvatar fullname="Fuensalida Mathias" img="/img/avatars/04.png" studentId="1110039" />
            <CardAvatar fullname="Rodríguez Roxana" img="/img/avatars/05.png" studentId="1164643" />
            <CardAvatar fullname="Sajama Hugo" img="/img/avatars/02.png" studentId="1111895" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const PageCover = () => {
  return (
    <Page>
      <img src={uadeLogo} className="absolute w-48 h-auto top-6 right-6" />
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <img src="/img/logo.jpeg" alt="Logo" className="h-72 w-auto rounded-full overflow-hidden shadow" />
        <div className="flex flex-col justify-center gap-10">
          <h1 className="text-8xl font-semibold leading-snug bg-gradient-to-b from-primary-400 via-primary-500 to-primary-700 text-transparent bg-clip-text">
            EasyTerms
          </h1>
          <CardIntro />
        </div>
      </div>
    </Page>
  );
};

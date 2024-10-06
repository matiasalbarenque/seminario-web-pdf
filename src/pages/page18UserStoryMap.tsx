import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import dashboard from '@/assets/img/user-story-map/dashboard.svg';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';

export const Page18UserStoryMap = () => {
  return (
    <Page>
      <div className="w-full mb-4 text-center">
        <PageTitle text="User Story Map" />
      </div>
      <div>
        <img src={dashboard} className="w-full z-10 drop-shadow" />
      </div>

      <div className="mt-5 flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              Trello de Historias de Usuario
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-700">
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
                  className="text-md font-medium text-gray-800 hover:text-primary-700"
                >
                  Trello: Historias de Usuario
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

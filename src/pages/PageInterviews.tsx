import { Page } from '@/components/Page';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const PageInterviews = () => {
  return (
    <Page>
      <div className="w-full text-center">
        <PageTitle text="Entrevistas" />
      </div>
      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              gtrfhsrgtf arthraehh
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum commodi veniam, quas magni
                nemo reprehenderit quasi, facilis nobis omnis at qui saepe minima eos iusto impedit repellat, corporis
                voluptas.
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="pb-4">
            <h3 className="pl-3 border-l-2 border-primary-300 text-xl font-semibold leading-none tracking-tight">
              gtrfhsrgtf arthraehh
            </h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="text-md font-open-sans text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum commodi veniam, quas magni
                nemo reprehenderit quasi, facilis nobis omnis at qui saepe minima eos iusto impedit repellat, corporis
                voluptas.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <div className="mx-6 my-10 flex flex-col gap-10 flex-1 z-10">
        <div className="flex flex-1 gap-10">
          <div className="p-8 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">55%</span>
              </div>
            </div>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
            </p>
          </div>
          <div className="p-8 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">67%</span>
              </div>
            </div>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique natus dolore, quis aspernatur alias
              consequuntur nam tempore minima accusamus enim quo hic sit consequatur. Sequi atque aut ratione
              praesentium! Nesciunt!
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-10">
          <div className="p-6 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">10%</span>
              </div>
            </div>
            <p className="mb-0">rgerfg</p>
          </div>
          <div className="p-6 pl-16 w-full bg-white rounded-xl shadow">
            <div className="absolute -left-4 -top-6 p-4 bg-white rounded-full shadow z-10">
              <div className="w-10 h-10 flex justify-center items-center">
                <span className="text-2xl font-semibold">10%</span>
              </div>
            </div>
            <p className="mb-0">rgerfg</p>
          </div>
        </div>
      </div> */}
    </Page>
  );
};

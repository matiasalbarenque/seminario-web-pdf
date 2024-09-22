import { Page } from '@/components/Page';

export const PageSurveysDetails = () => {
  return (
    <Page>
      <div className="mx-6 my-10 flex flex-col gap-10 flex-1 z-10">
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
      </div>
    </Page>
  );
};

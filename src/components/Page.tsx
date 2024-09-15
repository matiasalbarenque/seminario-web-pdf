import type { PageProps } from '@/typings/page';
import { WaveTopPage, WaveBottomPage } from './PageBackground';

export const Page = (props: PageProps) => {
  return (
    <section className="relative py-7 px-6 flex flex-col bg-gray-50 w-[210mm] h-[297mm] overflow-hidden">
      <div className="absolute w-full h-auto -top-3 left-0 z-0">
        <WaveTopPage />
      </div>
      {props.children}
      <div className="absolute w-full h-auto bottom-0 left-0 z-0">
        <WaveBottomPage />
      </div>
    </section>
  );
};

import type { UserPersonaProps } from '@/typings/user-persona';
import { Slider } from '@/components/ui/slider';

export const UserPersona = (props: UserPersonaProps) => {
  const { motivations, frustrations, fullname, img, imgDescription, address, skills } = props;
  return (
    <div className="w-full min-h-[470px] flex rounded-3xl mb-4 bg-white shadow overflow-hidden">
      <div className="flex-[3] flex flex-col">
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <span className="font-semibold text-lg text-gray-700 leading-10">Motivaciones</span>
            <ul className="ml-4 mt-1 list-disc text-xs text-gray-600">
              {motivations.map(a => (
                <li key={`motivations-${a}`} className="mb-2 leading-snug">
                  {a}
                </li>
              ))}
            </ul>
            <span className="font-semibold text-lg text-gray-700 leading-10">Frustraciones</span>
            <ul className="ml-4 mt-1 list-disc text-xs text-gray-600">
              {frustrations.map(a => (
                <li key={`frustrations-${a}`} className="mb-2 leading-snug">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            {skills.map(a => (
              <div key={`skills-${a}`} className="flex flex-col gap-2">
                <span className="text-xxs">{a.name}</span>
                <Slider defaultValue={[a.level]} max={100} step={1} />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 h-28 flex flex-col gap-y-4 justify-center bg-gradient-to-r from-white to-primary-200">
          <div className="flex justify-evenly">
            {props.hobbies.trademarks[0].map(a => (
              <img key={`trademarks-row0-${a}`} src={`/img/icons/trademarks/${a}`} className="h-7 w-auto" />
            ))}
          </div>
          <div className="flex justify-evenly">
            {props.hobbies.trademarks[1].map(a => (
              <img key={`trademarks-row1-${a}`} src={`/img/icons/trademarks/${a}`} className="h-7 w-auto" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-[3] flex flex-col gap-4 bg-primary">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="px-3 flex justify-center">
            <div className="w-52 h-52 flex justify-center items-center">
              <div className="absolute w-[calc(100%-3rem)] h-[calc(100%-3rem)] rounded-full bg-primary-800 animate-ping3s opacity-20 print:hidden" />
              <div className="rounded-full overflow-hidden shadow-xl">
                <img src={img} alt={fullname} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-7 bg-black rounded-3xl overflow-hidden bg-opacity-30 backdrop-blur-sm absolute -bottom-10 text-xs text-white font-medium leading-tight text-center">
              <span className="absolute left-2 top-2 text-6xl">{'″'}</span>
              {imgDescription}
              <span className="absolute right-3 -bottom-5 text-6xl">{'″'}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center flex-1">
          <span className="text-2xl uppercase">{fullname}</span>
          <span className="text-xl uppercase">{address}</span>
          <div className="w-32 border-b border-black" />
          <span className="text-sm">{props.position}</span>
          <ul className="ml-4 mt-4 list-disc text-sm">
            {props.personInfo.map(a => (
              <li key={`personInfo-${a.name}`} className="mb-2 leading-snug">
                <span className="font-semibold">{a.name} - </span>
                {a.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-[3] flex flex-col">
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <span className="font-semibold text-lg text-gray-700 leading-10">Escenario</span>
            <div>
              {props.setting.map(a => (
                <div key={`setting-${a}`} className="mb-4 text-xs text-gray-600 leading-normal">
                  {a}
                </div>
              ))}
            </div>
            <div className="w-full mt-8 mb-4 border-b border-gray-200" />
            <div className=" font-semibold text-lg text-gray-700 leading-[3]">Datos Demográficos</div>
            <div className="flex flex-col gap-4">
              {props.demographicData.map(a => (
                <div key={`demographicData-${a.name}`} className="flex">
                  <div className="flex-1 text-xxs font-semibold text-gray-600 uppercase">{a.name}</div>
                  <div className="flex-[4] text-xxs text-gray-700">{a.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 h-28 flex flex-col gap-y-4 bg-gradient-to-r from-primary-200 to-white">
          <div className="flex justify-evenly">
            {props.hobbies.apps[0].map(a => (
              <img key={`apps-row0-${a}`} src={`/img/icons/apps/${a}`} className="w-8 h-8" />
            ))}
          </div>
          <div className="flex justify-evenly">
            {props.hobbies.apps[1].map(a => (
              <img key={`apps-row1-${a}`} src={`/img/icons/apps/${a}`} className="w-8 h-8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { UserPersonaProps } from '@typings/user-persona';

export const UserPersona = (props: UserPersonaProps) => {
  const { motivations, frustrations, fullname, img, imgDescription, address } = props;
  return (
    <div className="w-full min-h-[470px] flex border rounded-3xl mb-4 bg-white shadow-sm overflow-hidden">
      <div className="flex-[3] flex flex-col">
        <div className="p-4 flex-1">
          <span className="font-semibold text-lg text-gray-700 leading-10">Motivaciones</span>
          <ul className="ml-4 mt-1 list-disc text-xs text-gray-600">
            {motivations.map(a => (
              <li className="mb-2 leading-snug">{a}</li>
            ))}
          </ul>
          <span className="font-semibold text-lg text-gray-700 leading-10">Frustraciones</span>
          <ul className="ml-4 mt-1 list-disc text-xs text-gray-600">
            {frustrations.map(a => (
              <li className="mb-2 leading-snug">{a}</li>
            ))}
          </ul>
        </div>
        <div className="h-28 bg-gradient-to-r from-white to-primary-200"></div>
      </div>
      <div className="flex-[3] flex flex-col gap-4 bg-primary">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="px-3 flex justify-center">
            <div className="w-52 h-52 rounded-full overflow-hidden bg-white shadow-xl">
              <img src={img} alt={fullname} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 bg-black rounded-3xl overflow-hidden bg-opacity-30 backdrop-blur-sm absolute -bottom-10 text-xs text-white font-medium leading-tight text-center">
              <span className="absolute left-2 top-2 text-6xl">{'″'}</span>
              {imgDescription}
              <span className="absolute right-3 -bottom-5 text-6xl">{'″'}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="mb-4 text-2xl uppercase">{fullname}</span>
          <span className="text-xl uppercase">{address}</span>
        </div>
      </div>
      <div className="flex-[3] p-4 overflow-hidden">hola3</div>
    </div>
  );
};

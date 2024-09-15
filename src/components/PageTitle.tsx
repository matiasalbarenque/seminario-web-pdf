import type { PageTitleProps } from '@/typings/page-title';

export const PageTitle = (props: PageTitleProps) => {
  const { className, text } = props;
  return (
    <div className="flex justify-center mb-6">
      <div className="px-6 bg-white rounded-[24px] shadow text-gray-600 w-fit">
        <h2
          className={`text-5xl font-semibold leading-normal bg-gradient-to-b from-primary-300 to-primary-700 text-transparent bg-clip-text ${className}`}
        >
          {text}
        </h2>
        {/* <h2 className={`text-5xl font-semibold leading-normal text-primary-600 ${className}`}>{text}</h2> */}
      </div>
    </div>
  );
};

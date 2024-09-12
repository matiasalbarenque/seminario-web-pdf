import type { PageTitleProps } from '@typings/page-title';

export const PageTitle = (props: PageTitleProps) => {
  const { text } = props;
  return <h2 className="text-5xl font-semibold leading-normal text-black">{text}</h2>;
};

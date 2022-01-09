import { ReactNode } from 'react';
import HomeHeader from '../modules/home/header';

type LayoutProps = { children: ReactNode };

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="my-12 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-1/3 mx-auto">
        <HomeHeader />

        <main>{children}</main>
      </div>
    </>
  );
};

export default DefaultLayout;

import Link from 'next/link';
import Logo from '@/assets/logo.png';
import ImageWrapper from '@/atoms/ImageWrapper';
import NavList from './NavList';

const MainHeader = () => (
  <header className="flex w-full justify-between items-center ">
    <Link href="/" className="flex gap-4 items-center ">
      <ImageWrapper
        src={Logo}
        imageSizes="h-12 w-12 lg:h-16 lg:w-16 "
        alt="Main logo of the website"
        sizes="30vw"
      />
      <h2 className="text-sm lg:text-xl uppercase font-semibold hidden sm:block">
        Food Explorer
      </h2>
    </Link>
    <NavList />
  </header>
);

export default MainHeader;

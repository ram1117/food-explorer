import Link from 'next/link';
import Logo from '@/assets/logo.png';
import ImageWrapper from '@/atoms/ImageWrapper';

const MainHeader = () => (
  <header className="flex w-full justify-between">
    <Link href="/" className="flex gap-4 items-center">
      <ImageWrapper
        src={Logo}
        imageSizes="h-6 w-6 lg:h-10 lg:w-10 "
        alt="Main logo of the website"
        sizes="30vw"
      />
      Food Explorer
    </Link>
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;

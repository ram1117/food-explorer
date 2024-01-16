'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavList = () => {
  const activePath = usePathname();
  const activeStyle = 'gradient-text-primary font-semibold';
  return (
    <nav>
      <ul className="flex gap-2 md:gap-6 lg:gap-12 items-center font-semibold">
        <li
          className={`text-sm  md:text-lg ${
            activePath === '/meals' ? activeStyle : ''
          }`}
        >
          <Link href="/meals">Meals</Link>
        </li>
        <li
          className={`text-sm  md:text-lg ${
            activePath === '/community' ? activeStyle : ''
          }`}
        >
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

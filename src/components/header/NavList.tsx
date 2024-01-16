'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavList = () => {
  const activePath = usePathname();
  const activeStyle = 'text-orange-600 font-semibold';
  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li
          className={`text-sm  md:text-base ${
            activePath === '/meals' ? activeStyle : ''
          }`}
        >
          <Link href="/meals">Meals</Link>
        </li>
        <li
          className={`text-sm  md:text-base ${
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

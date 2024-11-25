'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
// types of header
import { NavLink, NavMenuLink } from '../../types/header';

// components
// import CustomImage from '@/components/CustomImage';
import MaxWidth from '@/components/MaxWidth';
import Link from 'next/link';
import { cn } from '@/lib/utils';
// Import the locale file
import t from '../../messages/en.json';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
// lucide react icons 
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const pathname = usePathname(); // Get current pathname

  const navMenuLinks: NavLink[] = [
    {
      name: t.header.expertise,
      link: '/expertise',
    },
    {
      name: t.header.projects,
      link: '/projects',
    },
    {
      name: t.header.about_us,
      link: '/about-us',
    },
    {
      name: t.header.careers,
      link: '/careers',
    },
    {
      name: t.header.blog,
      link: '/blog',
    },
    {
      name: t.header.contact_us,
      link: '/contact-us',
      button: true,
    },
  ];

  return (
    <header >
      <MaxWidth className='flex justify-between items-center py-3'>
        <Link
          href='/'
          aria-label='Go to homepage'
          className='text-xl md:text-2xl font-bold flex items-center uppercase'
        >
          {/* <CustomImage src={headerLogo} width={160} height={59} priority alt="Website logo" /> */}
          {t.header.logo}
        </Link>
        <nav className='hidden md:flex items-center '>
          {navMenuLinks?.map((link: NavMenuLink, index: number) => (
            <Link
              key={index}
              href={link?.link ?? '/'}
              aria-label={`Go to ${link.name}`}
              className={cn(
                'pl-10 uppercase',
                pathname === link.link ? 'active font-semibold' : '', // Apply active class
              )}
            >
              {!link.button ? (
                <span className='flex items-center space-x-1 group'>
                  <span>{link.name}</span>
                </span>
              ) : (
                <span className='flex items-center space-x-1 group '>
                  <Button className='uppercase'>{link.name}</Button>
                </span>
              )}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <Menu className='w-6 h-6' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle> {t.header.logo}</SheetTitle>
            </SheetHeader>
            <nav className='mt-6 space-y-4'>
              {navMenuLinks.map((link: NavMenuLink, index: number) => (
                <Link
                  key={index}
                  href={link?.link ?? '/'}
                  aria-label={`Go to ${link.name}`}
                  className={cn(
                    'block uppercase text-lg font-medium',
                    pathname === link.link
                      ? 'text-blue-500'
                      : 'hover:text-blue-500',
                  )}
                >
                  {!link.button ? (
                    <span className='flex items-center space-x-1 group'>
                      <span>{link.name}</span>
                    </span>
                  ) : (
                    <Button className='uppercase w-full'>{link.name}</Button>
                  )}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </MaxWidth>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;

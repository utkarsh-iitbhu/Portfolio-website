'use client';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { HeartFilledIcon } from './icons';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-3">
      <Divider className="my-4" />
      <div className="flex items-center justify-between w-full max-w-7xl px-6">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            // <Button key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:text-primary text-sm data-[active=true]:font-medium'
              )}
              color="foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </NextLink>
            // </Button>
          ))}
        </ul>
        <p className="flex items-center text-sm">
          Copywrite @2024 | Built with{' '}
          <HeartFilledIcon color="#ED2B2A" size={20} /> by Utkarsh
        </p>
      </div>
    </footer>
  );
};

export default Footer;

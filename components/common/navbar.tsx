import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/common/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
  DownloadIcon,
} from '@/components/common/icons';

import { Button } from '@nextui-org/button';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-lg">utkarsh-iitbhu</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <ul className="hidden lg:flex gap-4 items-center justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
                {item.label === 'Resume' ? (
                  <DownloadIcon size={20} className="text-default-500 ml-2" />
                ) : null}
              </NextLink>
            </NavbarItem>
          ))}
          <Button
            size="sm"
            as={Link}
            isExternal
            href="/resume.pdf"
            endContent={<DownloadIcon size={16} className="text-default-500" />}
          >
            Resume
          </Button>
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <LinkedinIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="flex flex-col justify-between pb-10">
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary text-xl data-[active=true]:font-medium'
                )}
                color="foreground"
                href={!item.download ? item.href : ''}
                download={item.label === 'Resume' ? `${item.label}.pdf` : null}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <Button
            href="/resume.pdf"
            endContent={<DownloadIcon size={16} className="text-default-500" />}
          >
            Resume
          </Button>
        </div>
        <NavbarItem className="flex gap-10 justify-center">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon size={32} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon size={32} className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <LinkedinIcon size={32} className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

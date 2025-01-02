"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import {
  Bars3Icon,
  BugAntIcon,
  CakeIcon,
  CurrencyDollarIcon,
  GiftIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
<<<<<<< HEAD:packages/nextjs/components/Header.tsx
import { useActiveStakedBalance } from "~~/hooks/useActiveStakedBalance";
=======
import { useActiveStakedBalance } from "~~/hooks/useActiveStakedBalance"; 
import { useAccount } from "wagmi";
>>>>>>> main:components/Header.tsx

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "$mPAWSY",
    href: "/migration",
    icon: <CurrencyDollarIcon className="h-4 w-4" /> ,
  },
  {
    label: "Stake",
    href: "/staking",
    icon: <CakeIcon className="h-4 w-4" />,
  },
  {
    label: "Why $PAWSY?",
    href: "/why",
    icon: <QuestionMarkCircleIcon className="h-4 w-4" />,
  },
  {
    label: "Roadmap",
    href: "/roadmap",
    icon: <MapIcon className="h-4 w-4" />,
  },
  {
    label: "Rewards & Income",
    href: "/rewards",
    icon: <GiftIcon className="h-4 w-4" />,
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    icon: <UsersIcon className="h-4 w-4" />,
  },
  // Only show Debug menu item in development
  ...(process.env.NODE_ENV !== "production"
    ? [
        {
          label: "Debug Contracts",
          href: "/debug",
          icon: <BugAntIcon className="h-4 w-4" />,
        },
      ]
    : []),
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();
  const { address } = useAccount();
<<<<<<< HEAD:packages/nextjs/components/Header.tsx
  const { activeStakedBalance } = useActiveStakedBalance(address);

=======
  const { activeStakedBalance } = useActiveStakedBalance(address); 

  
>>>>>>> main:components/Header.tsx
  const extendedMenuLinks = [
    ...menuLinks,
    ...(activeStakedBalance >= 5000
      ? [
          {
            label: "🤫📄",
            href: "/secret",
          },
        ]
      : []),
  ];

  return (
    <>
      {extendedMenuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky 2xl:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto 2xl:w-1/2">
        <div className="2xl:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden 2xl:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.jpg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Bark Ruffalo</span>
            <span className="text-xs">Trulyadog</span>
          </div>
        </Link>
        <ul className="hidden 2xl:flex 2xl:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};

"use client";
import Link from "next/link";
import { FC, useEffect } from "react";

import { usePathname } from "next/navigation";
/// Import Icon's
import { CartInActiveIcon } from "@/assets/icons/cart-in-active-icon";
import { HomeInActiveIcon } from "@/assets/icons/home-in-active-icon";
import { LocationInActiveIcon } from "@/assets/icons/location-in-active-icon";
import { ProfileInActiveIcon } from "@/assets/icons/profile-in-active-icon";
import { ShopInActiveIcon } from "@/assets/icons/shop-in-active-icon";
import { HomeActiveIcon } from "@/assets/icons/home-active-icon";
import { ShopActiveIcon } from "@/assets/icons/shop-active-icon";
import { CartActiveIcon } from "@/assets/icons/cart-active-icon";
import { ProfileActiveIcon } from "@/assets/icons/profile-active-icon";
import { LocationActiveIcon } from "@/assets/icons/location-active-icon";
import { useLocale } from "next-intl";
import type { TLocale } from "@/types"; // Assuming TLocale is defined in this file

export const NavigationButtons: FC = () => {
  const pathname = usePathname();
  const locale = useLocale() as TLocale;
  useEffect(() => {
    console.log(locale, pathname, "locale =>>>");
  }, [locale, pathname]);

  const links = [
    {
      href: "/",
      active: ["/", "/uz", "/ru"],
      label: "Home",
      icon: pathname === "/" ? HomeActiveIcon : HomeInActiveIcon,
    },
    {
      href: "/menu",
      active: ["/menu", "/uz/menu", "/ru/menu"],
      label: "Menu",
      icon: pathname === "/menu" ? ShopActiveIcon : ShopInActiveIcon,
    },
    {
      href: "/location",
      active: ["/location", "/uz/location", "/ru/location"],
      label: "Location",
      icon:
        pathname === "/location" ? LocationActiveIcon : LocationInActiveIcon,
    },
    {
      href: "/cart",
      active: ["/cart", "/uz/cart", "/ru/cart"],
      label: "Cart",
      icon: pathname === "/cart" ? CartActiveIcon : CartInActiveIcon,
    },
    {
      href: "/profile",
      active: ["/profile", "/uz/profile", "/ru/profile"],
      label: "Profile",
      icon: pathname === "/profile" ? ProfileActiveIcon : ProfileInActiveIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full right-0 bg-white shadow-bottomButtonBoxShadow rounded-bottomButtonBorderRadius">
      <div className="flex justify-around items-center h-13">
        {links.map(({ href, label, icon: Icon, active }, index) => {
          const isActive = active.includes(pathname);
          return (
            <Link
              key={index}
              href={href}
              locale={locale}
              className={`flex relative flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ease-in-out 
                ${
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                }`}
            >
              <span
                className={`${
                  isActive &&
                  "flex items-center justify-center shadow-lg -translate-y-[23px] border-2 border-transparent w-[50px] rounded-full py-2 bg-white"
                }`}
              >
                <Icon />
              </span>
              <span className="text-xs pb-2 absolute -bottom-[6px]">
                {isActive && label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

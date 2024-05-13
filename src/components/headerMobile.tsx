import React from "react";

import Logo from "./icons/logo";

import { ProfileDropdown } from "./profileDropdown";

import { MenuMobile } from "./menuMobile";
import { useTheme } from "next-themes";

export default function HeaderMobile() {
  //  const { theme } = useTheme();
  return (
    <div className="flex sm:hidden  py-5 px-6   ">
      <section className="flex items-center justify-between w-full  ">
        <MenuMobile />
        <Logo width="80px" />
        <ProfileDropdown />
      </section>
    </div>
  );
}

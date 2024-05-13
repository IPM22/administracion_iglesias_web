import React from "react";

import Logo from "./icons/logo";
import { Navbar } from "./navbar";
import { ProfileDropdown } from "./profileDropdown";
import { Search } from "./search";
import { ModeToggle } from "./modeToggle";

export default function Header() {
  return (
    <div className="hidden sm:flex justify-between py-6 px-12   ">
      <section className="flex items-center gap-12  ">
        <Logo width="140px" className="" />
        <Navbar />
      </section>
      <section className="flex items-center gap-12">
        <Search />
        <ModeToggle />
        <ProfileDropdown />
      </section>
    </div>
  );
}

import React from "react";
import scss from "./Header.module.scss";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="text-white text-1xl">
      <div className="container">
        <div className={scss.header}>
          {/* Top Header */}
          <div className="flex justify-between items-center py-4">
            {/* Desktop menu */}
            <div className="hidden sm:flex items-center gap-8">
              <Logo />
              <div>Обо мне</div>
              <div>About me</div>
            </div>

            {/* Mobile menu: full width, justify-between */}
            <div className="flex sm:hidden w-full justify-between items-center">
              <Logo />
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2">
                    <Menu className="w-6 h-6 text-white" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Меню</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6 text-lg">
                    <a href="#">Обо мне</a>
                    <a href="#">About me</a>
                    <a href="#">Contact</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Contact */}
            <div className="hidden sm:block">Contact</div>
          </div>

          <h1 className="text-center text-5xl sm:text-7xl font-semibold tracking-tight mt-12">
            Изучай веб-разработку с Yntymак
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

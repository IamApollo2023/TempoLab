import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LogIn, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  isAuthenticated?: boolean;
  onLogin?: () => void;
  onRegister?: () => void;
}

const Navbar = ({
  isAuthenticated = false,
  onLogin = () => {},
  onRegister = () => {},
}: NavbarProps) => {
  return (
    <nav className="w-full h-20 px-4 md:px-6 bg-white border-b fixed top-0 z-50">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/vite.svg" alt="DMMMSU Logo" className="h-12 w-auto" />
          <span className="ml-2 text-xl font-bold hidden md:block">DMMMSU</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px]">
                    <ul className="grid gap-3">
                      <li>College of Education</li>
                      <li>College of Engineering</li>
                      <li>College of Arts and Sciences</li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px]">
                    <ul className="grid gap-3">
                      <li>Requirements</li>
                      <li>Process</li>
                      <li>FAQs</li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="p-2">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {!isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={onLogin}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button onClick={onRegister}>Register</Button>
            </div>
          ) : (
            <Button variant="ghost">My Application</Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost">Programs</Button>
              <Button variant="ghost">Admissions</Button>
              <Button variant="ghost">Contact</Button>
              {!isAuthenticated ? (
                <>
                  <Button variant="outline" onClick={onLogin}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                  <Button onClick={onRegister}>Register</Button>
                </>
              ) : (
                <Button variant="ghost">My Application</Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

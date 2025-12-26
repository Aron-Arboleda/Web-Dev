import React from "react";

import logo from "@/assets/images/logo.png";

// const NavigationItem = ({
//   to,
//   children,
// }: {
//   to: string;
//   children: React.ReactNode;
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation;
//   const isActive = location.name === to;

//   return (
//     <div
//       className={`flex cursor-pointer items-center gap-2 rounded p-2 ${
//         isActive ? "bg-primary-foreground" : ""
//       }`}
//       onClick={() => navigate(to)}
//     >
//       {children}
//     </div>
//   );
// };

// const NavigationMenu = () => {
//   return (
//     <div className="bg-card-foreground text-popover-foreground flex w-full rounded p-2 px-3">
//       <div className="flex gap-10">
//         <img src={logo} className="w-13" />
//         <div className="">asdasd</div>
//       </div>
//     </div>
//   );
// };

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;

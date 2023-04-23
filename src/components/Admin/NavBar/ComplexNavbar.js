import React from "react";
import Notification from "./Notification";
import ProfileMenu from "./ProfileMenu";
import Toggle from "../../Utility/DarkMode";
import Breadcrumb from "./Breadcrumbs";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import {
  useMaterialTailwindController,
} from "../../../context";
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
  <>
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href=""
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
  </>
  );
}

const ComplexNavbar = () => {
  const [controller] = useMaterialTailwindController();
  const { fixedNavbar, darkMode } = controller;
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar
      color={darkMode ? "white" : "transparent"}
      className={`mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 rounded-xl transition-all 
      ${fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
        }`}
      fullWidth
      blurred={true}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="div"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <Breadcrumb/>
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavList />
            <Notification />
            <Toggle/>
        </ul>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
       <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
         <NavList />
       </ul>
      </MobileNav>
    </Navbar>
  );
}
export default ComplexNavbar;
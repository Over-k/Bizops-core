import { Link, NavLink} from "react-router-dom";
import { Bars3BottomLeftIcon,XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  IconButton,
  Typography,
  Button
} from "@material-tailwind/react";
import routes from '../../routes';
import { useMaterialTailwindController, setOpenSidenav } from "../../../context";

const SideBar = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-[#151f32] to-[#192a45]",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenSidenav(dispatch, false)
    );

  return (
    <>
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-1 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-52 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${
          sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
        }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src="https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg" size="sm" />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            Home
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
    {routes.map(({ title, pages }, key) => (
        <ul key={key} className="mb-4 flex flex-col gap-1">
          {title && (
            <li className="mx-3.5 mt-4 mb-2">
              <Typography
                variant="small"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                className="font-black uppercase opacity-75"
              >
                {title}
              </Typography>
            </li>
          )}
          {pages.map(({ icon, name, path }) => (
            <li key={name}>
              <NavLink to={`/${title}/${path}`}>
                {({ isActive }) => (
                    <Button
                    variant={isActive ? "gradient" : "text"}
                    color={
                      isActive
                        ? sidenavColor
                        : sidenavType === "dark"
                        ? "white"
                        : "blue-gray"
                    }
                    className="flex items-center gap-4 px-4 capitalize"
                    fullWidth
                  >
                    {icon}
                    <Typography
                      color="inherit"
                      className="font-medium capitalize"
                    >
                      {name}
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
    ))}
    </div>
    </aside>
      {!openSidenav ?
    <IconButton
    size="lg"
    color={sidenavType === "dark" ? "blue-gray" : "white"}
    className={`${sidenavTypes[sidenavType]} fixed bottom-8 left-8 z-40 rounded-full shadow-blue-gray-900/10`}
    ripple={false}
    onClick={() => setOpenSidenav(dispatch, true)}
  >
    <Bars3BottomLeftIcon className="h-5 w-5"/>
  </IconButton> : null}
      </>
  );

}

export default SideBar
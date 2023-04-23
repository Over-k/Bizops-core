import {
    HomeIcon,
    UserCircleIcon,
    UsersIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
  UserPlusIcon, Cog6ToothIcon,
    PowerIcon
  } from "@heroicons/react/24/outline";
import { Home, Profile, Users, Notifications, Settings } from "./Admin/DashboardPages";
  import { SignIn, SignUp } from "./Auth";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes = [
    {
      title: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "dashboard",
          path: "",
          element: <Home />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "profile",
          element: <Profile />,
        },
        {
          icon: <UsersIcon {...icon} />,
          name: "users",
          path: "users",
          element: <Users />,
        },
        {
          icon: <BellIcon {...icon} />,
          name: "notifications",
          path: "notifications",
          element: <Notifications />,
        },
        {
          icon: <Cog6ToothIcon {...icon} />,
          name: "settings",
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      title: "auth",
      pages: [
        {
          icon: <ArrowRightOnRectangleIcon {...icon} />,
          name: "sign in",
          path: "sign-in",
          element: <SignIn />,
        },
        {
          icon: <UserPlusIcon {...icon} />,
          name: "sign up",
          path: "sign-up",
          element: <SignUp />,
        },
        {
          icon: <PowerIcon {...icon} />,
          name: "sign out",
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      title: "home",
      pages: [
        {
          icon: <ArrowRightOnRectangleIcon {...icon} />,
          name: "sign in",
          path: "sign-in",
          element: <SignIn />,
        },
        {
          icon: <UserPlusIcon {...icon} />,
          name: "sign up",
          path: "sign-up",
          element: <SignUp />,
        },
        {
          icon: <PowerIcon {...icon} />,
          name: "sign out",
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
  ];
  
  export default routes;
  
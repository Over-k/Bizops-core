import React from "react";
import TimeSince from "../../Utility/TimeSince";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  BellIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// nav list menu
const navListMenuItems = [
  {
        title: "@material-tailwind/html",
        date: "",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
      title: "@material-tailwind/react",
      date:"",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
      title: "Material Tailwind PRO",
      date:"",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const Notification = ()=> {

    const renderItems = navListMenuItems.map(({ title,date, description }) => (
      <a href="/" key={title}>
          <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
              <Avatar
                variant="circular"
                alt="candice wu"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="flex flex-col gap-1">
                <Typography variant="small" color="gray" className="font-normal">
                <span className="font-medium text-blue-gray-900">{title}</span>{" "}
                {description.length > 45 ? description.slice(0, 45) + '...' : description}
                </Typography>
                <Typography
                  variant="small"
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  <ClockIcon className="h-3 w-3" />
                  <TimeSince date={date}/>.
                </Typography>
              </div>
            </MenuItem>
        </a>
    
      ));
     
      return (
          <Menu>
            <MenuHandler>
              <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <BellIcon className="h-[18px] w-[18px]" />
                Notification
              </MenuItem>
            </Typography>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">
                {renderItems}
            </MenuList>
          </Menu>
      );
}
export default Notification;
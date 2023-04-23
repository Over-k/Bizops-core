import { IconButton, } from "@material-tailwind/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import {
  useMaterialTailwindController,
  setDarkMode,
} from "../../context";
const Toggle = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const {darkMode} = controller;

  
    return (
        <IconButton
        variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent dark:text-sky-400"
          onClick={() => setDarkMode(dispatch, !darkMode)}
        >
          {!darkMode ? (
            <MoonIcon strokeWidth={1} className="w-[18px] h-[18px]"/>
          ) : (
            <SunIcon strokeWidth={1} className="w-[18px] h-[18px]"/>
          )}
        </IconButton>
    )
}
export default Toggle;
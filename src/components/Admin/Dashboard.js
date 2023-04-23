import { Routes, Route} from "react-router-dom";
import ComplexNavbar from "./NavBar/ComplexNavbar"
import SideNav from "./SideNar/SideNar"
import routes from "../routes"
import { useMaterialTailwindController } from "../../context";
import Footer from "../Utility/Footer"
const Dashboard = () => {
   const [controller] = useMaterialTailwindController();
   const {darkMode} = controller;
   return (
      <div className={`min-h-screen ${darkMode ? "dark bg-[#111827]": "bg-blue-gray-50/50"}`}>
         <SideNav />
         <div className="p-4 xl:ml-56">
            <ComplexNavbar />

            <Routes path="dashboard">
              {routes.map(
                ({ title, pages }) =>
                  title === "dashboard" &&
                  pages.map(({ path, element }) => (
                     <Route exact path={path} element={element}/>
                  ))
             )}
          
        </Routes>
         <div className="text-black-gray-600">
          <Footer/>
        </div>
         </div>
      </div>
   );
};
export default Dashboard;

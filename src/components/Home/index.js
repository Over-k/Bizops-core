import { Routes, Route } from "react-router-dom";
import Footer from "../Utility/Footer"
import Navbar from "../Utility/Navbar"
import routes from "../routes";
const Index = ()=> {

  return (
    <div className="relative min-h-screen w-full bg-white dark:text-sky-400">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar />
      </div>
      <Routes>
        {routes.map(
          ({ title, pages }) =>
            title === "home" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer/>
      </div>
    </div>
  );
}

export default Index;

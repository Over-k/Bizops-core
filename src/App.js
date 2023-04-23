import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Admin } from "./pages";
import NotFound from "./components/Utility/NotFound"
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Home />}/>
        <Route path="/dashboard/*" element={<Admin />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
     
  );
}

export default App;

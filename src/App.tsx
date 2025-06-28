import { Outlet } from "react-router";
import Navbar from "./components/ui/layout/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;

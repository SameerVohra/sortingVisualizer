import Header from "./components/Header/Header.tsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

import MainRoutes from "./components/components/Routes/MainRoutes";
import Homepage from "./components/UI/Homepage";
import Login from "./components/components/Auth/Login";
import Register from "./components/components/Auth/Register";

function App() {
  return (
    <div>
      <Homepage />
      <MainRoutes />
    </div>
  );
}

export default App;

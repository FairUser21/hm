import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import CategoryNav from "./components/Nav/CategoryNav";

function App() {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <MainRoutes />
    </div>
  );
}

export default App;

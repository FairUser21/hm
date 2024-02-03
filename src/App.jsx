import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import CategoryNav from "./components/Nav/CategoryNav";
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

// const swiper = new Swiper(...);

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

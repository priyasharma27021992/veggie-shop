import "./App.css";
import { Layout } from "./feature-components/layout/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ShoppingPage } from "./pages/ShoppingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingProvider } from "./context/ShopContext";
import { Login } from "./pages/Login";

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shopping" element={<ShoppingPage />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;

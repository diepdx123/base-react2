import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}></Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

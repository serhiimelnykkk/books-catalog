import BookCatalog from "./components/pages/BookCatalog/BookCatalog";
import "./App.css";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BookCatalog />} />
      <Route
        path="/favorites"
        element={<BookCatalog showFavoritesOnly={true} />}
      />
    </Routes>
  );
};

export default App;

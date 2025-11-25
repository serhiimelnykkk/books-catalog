import BookCatalog from "./components/pages/BookCatalog/BookCatalog";
import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/common/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookCatalog />} />
        <Route
          path="/favorites"
          element={<BookCatalog showFavoritesOnly={true} />}
        />
      </Routes>
    </>
  );
};

export default App;

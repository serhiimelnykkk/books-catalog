import BookCatalog from "./components/pages/BookCatalog/BookCatalog";
import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/common/Header/Header";
import NotFound from "./components/pages/NotFound/NotFound";
import Book from "./components/pages/Book/Book";

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
        <Route path="/books/:id" element={<Book />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

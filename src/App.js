import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ErrorPage, SharedLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

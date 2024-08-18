import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ErrorPage, ContactPage, SharedLayout, ProjectsPage, QaProjectsPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="qaprojects" element={<QaProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function Layout() {
  return (
    <>
      <Navbar /> <Outlet /> <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/project/:title" element={<ProjectPage />} />
          <Route path="/experience/:id" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

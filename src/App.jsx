import { lazy, Suspense, useEffect, useState } from "react";
import "./styles/app.css";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";

const AboutPage = lazy(() => import("./pages/AboutPage.jsx").then((module) => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx").then((module) => ({ default: module.ServicesPage })));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx").then((module) => ({ default: module.ContactPage })));

export default function App() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home": return <HomePage setPage={setPage} />;
      case "About": return <AboutPage setPage={setPage} />;
      case "Services": return <ServicesPage setPage={setPage} />;
      case "Contact Us": return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main>
        <Suspense fallback={<div className="page-loading" />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setPage={setPage} />
    </>
  );
}

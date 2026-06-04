import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { WorkPage } from "@/pages/WorkPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        textAlign: "center",
        padding: 40,
      }}
    >
      <span style={{ color: "var(--accent)", fontSize: 48, fontFamily: "var(--ff-mono)", fontWeight: 600 }}>404</span>
      <h1 className="ee-h2">Page not found</h1>
      <p style={{ color: "var(--fg-2)", fontSize: 16 }}>The page you're looking for doesn't exist.</p>
      <a
        href="/"
        style={{
          marginTop: 8,
          background: "var(--accent)",
          color: "var(--bg)",
          borderRadius: 100,
          padding: "12px 24px",
          fontWeight: 600,
          fontSize: 15,
          textDecoration: "none",
        }}
      >
        Back to home
      </a>
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

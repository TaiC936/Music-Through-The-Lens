import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Index from "@/pages/IndexPage";
import About from "@/pages/AboutPage";
import Team from "@/pages/TeamPage";
import Contact from "@/pages/ContactPage";
import Gallery from "@/pages/GalleryPage";
import BTS from "@/pages/BTSPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Blog from "@/pages/BlogPage";
import Article1 from "@/pages/BlogArticles/A1";
import ScrollToTop from "./components/shared/scrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Behind-The-Scenes" element={<BTS />} />
          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/5-Essential-Concert-Photography-Tips-for-Aspiring-Music-Photographers"
            element={<Article1 />}
          />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

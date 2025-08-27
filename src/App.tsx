import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Essay from './pages/EssayPage';

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="foladawrites-theme">
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/essay/:slug" element={<Essay />} />
          </Routes>
        </main>
      </div>
    </Router>
  </ThemeProvider>
);

export default App;

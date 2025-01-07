import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar'; // Main Navbar
import Footer from './components/Footer'; // Global Footer
import Index from './pages/index'; // Public Index page
import About from './pages/about'; // Public About page
import Services from './pages/services'; // Public Services page
import Contact from './pages/contact'; // Public Contact page
import Register from './pages/register'; // Public Register page
import { SideNav } from './components/admin/SideNav'; // Admin Sidebar
import { Navbar as AdminNavbar } from './components/admin/Navbar'; // Admin Navbar
import { Footer as AdminFooter } from './components/admin/Footer'; // Admin Navbar
import { Home } from './components/admin/Home'; // Admin Home Page
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route
          path="/"
          element={
            <>
            <Header/>
              <MyNavbar />
              <Index/>

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />

            </>
          }
        />

        {/* Admin Layout */}
        <Route
          path="/admin/*"
          element={
            <div className="wrapper">
              <SideNav />
              <div className="main">
                <AdminNavbar />
                <main className="content">
                  <div className="container-fluid p-0">
                    <Home/>
                    </div>
                    </main>
                                    <AdminFooter />
                    <Routes>
                      <Route path="/admin/home" element={<Home />} />
                      {/* Add more admin routes here if needed */}
                    </Routes>
                  </div>
              </div>
          }
        />
            </Routes>
    </BrowserRouter>
  );
}

export default App;

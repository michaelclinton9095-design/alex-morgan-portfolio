import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { AuthProvider } from './context/AuthContext';
import { PublicPortfolio } from './pages/PublicPortfolio';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProjects } from './pages/admin/AdminProjects';
import { AdminProfile } from './pages/admin/AdminProfile';
import { AdminExperience } from './pages/admin/AdminExperience';
import { AdminServices } from './pages/admin/AdminServices';
import { AdminInquiries } from './pages/admin/AdminInquiries';
import { AdminSettings } from './pages/admin/AdminSettings';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ScrollToTopOnNavigate, ScrollToTopButton } from './components/ScrollToTop';

export function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <AuthProvider>
          <Router>
            <ScrollToTopOnNavigate />
            <ScrollToTopButton />
            <Routes>
              {/* Public Freelance Portfolio Website */}
              <Route path="/" element={<PublicPortfolio />} />

              {/* Admin Portal Authentication */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="projects" element={<AdminProjects />} />
                  <Route path="profile" element={<AdminProfile />} />
                  <Route path="experience" element={<AdminExperience />} />
                  <Route path="services" element={<AdminServices />} />
                  <Route path="inquiries" element={<AdminInquiries />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  adminUser: { username: string; role: string } | null;
  login: (username: string, pass: string) => boolean;
  logout: () => void;
  authError: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });

  const [adminUser, setAdminUser] = useState<{ username: string; role: string } | null>(() => {
    const saved = sessionStorage.getItem('admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [authError, setAuthError] = useState<string | null>(null);

  const login = (username: string, pass: string): boolean => {
    // Secure Administrator authentication credentials
    // Note: Can be customized in production or configured via environment
    if ((username === 'admin' || username === 'engineer') && pass === 'Admin@Portfolio2026') {
      const user = { username, role: 'SuperAdmin' };
      setIsAuthenticated(true);
      setAdminUser(user);
      sessionStorage.setItem('admin_authenticated', 'true');
      sessionStorage.setItem('admin_user', JSON.stringify(user));
      setAuthError(null);
      return true;
    } else {
      setAuthError('Invalid administrator credentials. Please check your username and password.');
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_user');
  };

  useEffect(() => {
    const handleStorage = () => {
      setIsAuthenticated(sessionStorage.getItem('admin_authenticated') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminUser, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

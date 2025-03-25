"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      setLoading(true);
      // For testing purposes - replace with your actual authentication logic
      if (email === 'admin@test.com' && password === 'admin123') {
        setUser({ email, role: 'admin' });
        router.push('/AdminDash');
        return { success: true };
      } else if (email === 'provider@test.com' && password === 'provider123') {
        setUser({ email, role: 'provider' });
        router.push('/Provider');
        return { success: true };
      } else if (email === 'user@test.com' && password === 'user123') {
        setUser({ email, role: 'user' });
        router.push('/User');
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: error.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/signIn');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
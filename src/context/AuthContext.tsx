import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react-refresh/only-export-components */

type User = {
  name: string;
  email: string;
  profilepic: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (name: string, email: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (name: string, email: string): boolean => {
    setUser({
      name,
      email,
      profilepic: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}`,
    });
    setIsAuthenticated(true);
    return true;
  };

  const register = (name: string, email: string, password: string): boolean => {
    console.log("Logging in with password:", password);
    setUser({ name, email, profilepic: "" });
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import AppLayout from "./layouts/AppLayout";
import { useAuth } from "./context/AuthContext";
import { SidebarProvider } from "./context/SidebarContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <SidebarProvider>
              <AppLayout />
            </SidebarProvider>
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/dashboard" />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

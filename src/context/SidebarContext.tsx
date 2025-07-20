import React, { createContext,  useState } from "react";

/* eslint-disable react-refresh/only-export-components */
type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <SidebarContext.Provider value={{ isOpen: sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};


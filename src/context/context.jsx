// AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Tạo context
const AppContext = createContext();

// 2. Tạo Provider component
export const AppProvider = ({ children }) => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false)
  const [themeMode, setThemeMode] = useState(true);

  const value = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook để dùng context dễ hơn (khuyên dùng)
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

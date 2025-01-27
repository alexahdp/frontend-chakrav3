import { createContext, ReactNode, useContext, useState } from "react";


const MenuContext = createContext<{isOpen: boolean; setIsOpen: (a: boolean) => void; isCollapsed: boolean, setIsCollapsed: (a: boolean) => void} | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider = ({children}: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <MenuContext.Provider value={{isOpen, setIsOpen, isCollapsed, setIsCollapsed}}>{children}</MenuContext.Provider>
  )
};

// AuthProvider.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoged: boolean;
  setIsLoged: (isLoged: boolean) => void;
}
const Context = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <Context.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </Context.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};

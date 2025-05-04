// import { createContext, useState } from 'react';
// interface AuthContext {
//   setIsLoged: (isLoged: boolean) => void;
//   // other properties or methods
// }

// export const Context = createContext({
//   isLoged: true,
//   setIsLoged: (value: boolean) => {},
// });

// export const AuthContext: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//   const [isLoged, setIsLoged] = useState(true);
//   return (
//     <>
//       <Context.Provider value={{ isLoged, setIsLoged }}>
//         {children}
//       </Context.Provider>
//     </>
//   );
// };

//  export const useAuth = () => useContext(AuthContext)!;

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

// import { createContext, useContext, useState } from "react";

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext)!;
